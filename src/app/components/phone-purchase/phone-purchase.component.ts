import { Component, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationController } from '../../controllers/navigation.controller';
import { phonenumberValidator } from '../../directives/phonenumber-validator.directive';

@Component({
    selector: 'phone-purchase',
    templateUrl: './phone-purchase.component.html',
    styleUrls: ['./phone-purchase.component.css']
})

export class PhonePurchaseComponent implements OnInit {

    private inputPhoneForm: FormGroup;
    private formErrors = {
        'phone': ''
    };
    private validationMessages = {
        'phone': {
            'required': 'Số điện thoại không được để trống.',
            'phonenumberValidation': 'Số điện thoại không đúng vui lòng kiểm tra lại.'
        }
    };

    constructor(
        private navigationController: NavigationController,
        private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildInputForm();
    }

    onContinueButtonClicked(value: any, form: any) {
        if (form.valid) {
            this.navigationController.goToConfirmPhonePage();
        } else {

        }
    }

    buildInputForm(): void {
        this.inputPhoneForm = this.fb.group({
            'phone': ['',
                [
                    Validators.required,
                    phonenumberValidator(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)
                ]
            ],
        });
        this.inputPhoneForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.inputPhoneForm) {
            return;
        }
        const form = this.inputPhoneForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + '';
                    break;
                }
            }
        }
    }

}
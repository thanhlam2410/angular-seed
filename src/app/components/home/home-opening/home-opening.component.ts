import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../directives/email-validator.directive';

@Component({
    selector: 'home-opening',
    templateUrl: './home-opening.component.html',
    styleUrls: ['./home-opening.component.css']
})

export class HomeOpeningComponent {

    @Input('info-buying-cost') infoBuyingCost = 0;
    @Input('info-selling-cost') infoSellingCost = 0;

    @Output() loginClick: EventEmitter<any> = new EventEmitter();
    @Output() quickBuyingClick: EventEmitter<any> = new EventEmitter();
    @Output() quickSellingClick: EventEmitter<any> = new EventEmitter();

    private loginForm: FormGroup;
    private formErrors = {
        'email': ''
    };
    private validationMessages = {
        'email': {
            'required': 'Email không được để trống.',
            'emailValidation': 'Email không đúng vui lòng kiểm tra lại.'
        }
    };

    constructor(
        private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildLoginForm();
    }

    onLoginButtonClick(value: any, form: any) {
        console.log(value);
        console.log(form);
        if (form.valid) {
            this.loginClick.emit();
        } else {

        }
    }

    onQuickBuyingClick() {
        this.quickBuyingClick.emit();
    }

    onQuickSellingClick() {
        this.quickSellingClick.emit();
    }

    buildLoginForm(): void {
        this.loginForm = this.fb.group({
            'email': ['',
                [
                    Validators.required,
                    emailValidator(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
                ]
            ],
        });
        this.loginForm.valueChanges.subscribe(data => this.onEmailValueChanged(data));
        this.onEmailValueChanged(); // (re)set validation messages now
    }

    onEmailValueChanged(data?: any) {
        if (!this.loginForm) {
            return;
        }
        const form = this.loginForm;

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
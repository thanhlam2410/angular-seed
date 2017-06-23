/**
 * Created by haole on 6/9/17.
 */
import { Component, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationController } from '../../controllers/navigation.controller';
import { emailValidator } from '../../directives/email-validator.directive';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    userEmail = 'haole@gmail.com';
    showLoginForm = true;

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
        private navigationController: NavigationController,
        private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildLoginForm();
    }

    onContinueButtonClicked(value: any, form: any) {
        if (form.valid) {
            this.showLoginForm = false;
            // this.navigationController.goToFirstLoginPage();
        } else {
            
        }
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


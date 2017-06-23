import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(emailRex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const email = control.value;
        const yes = emailRex.test(email);
        return yes ? null : { 'emailValidation': { email } };
    };
}

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }]
})

export class EmailValidator implements Validator, OnChanges {

    @Input() emailValidator: string;
    private emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    private validatorFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['emailValidation'];
        if (change) {
            const re = new RegExp(this.emailRegex);
            this.validatorFn = emailValidator(re);
        } else {
            this.validatorFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.validatorFn(control);
    }
}
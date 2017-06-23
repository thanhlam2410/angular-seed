import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function phonenumberValidator(phoneRex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const phonenumber = control.value;
        const yes = phoneRex.test(phonenumber);
        return yes ? null : { 'phonenumberValidation': { phonenumber } };
    };
}

@Directive({
    selector: '[phonenumberValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhonenumberValidator, multi: true }]
})

export class PhonenumberValidator implements Validator, OnChanges {

    @Input() phonenumberValidator: string;
    private phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    private validatorFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['phonenumberValidation'];
        if (change) {
            const re = new RegExp(this.phoneRegex);
            this.validatorFn = phonenumberValidator(re);
        } else {
            this.validatorFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.validatorFn(control);
    }
}
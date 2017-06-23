import { NgModule } from '@angular/core';
import { EmailValidator } from '../directives/email-validator.directive';
import { PhonenumberValidator } from '../directives/phonenumber-validator.directive';

@NgModule({
    declarations: [
        EmailValidator,
        PhonenumberValidator
    ],
    exports: [
        EmailValidator,
        PhonenumberValidator
    ]
})
export class SharedModule { }
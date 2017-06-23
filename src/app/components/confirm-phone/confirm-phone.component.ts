import { Component } from '@angular/core';
import { NavigationController } from '../../controllers/navigation.controller';

@Component({
    selector: 'confirm-phone-page',
    templateUrl: './confirm-phone.component.html',
    styleUrls: ['./confirm-phone.component.css']
})

export class ConfirmPhoneComponent {

    constructor(
        private navigationController: NavigationController) {
    }

    onConfirmButtonClick() {
        this.navigationController.goToPaymentPurchase();
    }

}
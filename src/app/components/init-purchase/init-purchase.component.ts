import { Component } from '@angular/core';
import {NavigationController} from "../../controllers/navigation.controller";

@Component({
    selector: 'init-purchase',
    templateUrl: './init-purchase.component.html',
    styleUrls: ['./init-purchase.component.css']
})

export class InitPurchaseComponent {
    constructor(
        private navigationController: NavigationController
    ) {
    }

    onButtonContinuteClick() {
        this.navigationController.goToPhonePurchasePage();
    }

}
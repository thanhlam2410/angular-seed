import { Component } from '@angular/core';
import { NavigationController } from '../../controllers/navigation.controller';

@Component({
    selector: 'banking-selling',
    templateUrl: './banking-selling.component.html',
    styleUrls: ['./banking-selling.component.css']
})

export class BankingSellingComponent {

    constructor(
        private navigationController: NavigationController) {
    }

    onButtonContinuteClick() {
        this.navigationController.goToTransferSellingPage()
    }

}

import { Component } from '@angular/core';
import { NavigationController } from '../../controllers/navigation.controller';

@Component({
    selector: 'init-selling',
    templateUrl: './init-selling.component.html',
    styleUrls: ['./init-selling.component.css']
})

export class InitSellingComponent {

    constructor(
        private navigationController: NavigationController
    ) {
    }

    onButtonContinuteClick() {
        this.navigationController.goToBankingSellingPage();
    }

}
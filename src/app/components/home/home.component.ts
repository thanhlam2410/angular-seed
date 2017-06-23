/**
 * Created by haole on 6/8/17.
 */
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TradeModel } from '../../models/trade.model';
import { NavigationController } from '../../controllers/navigation.controller';
import { AuthController } from '../../controllers/auth.controller';
import { VerifyResponse } from '../../models/responses/verify.response';
import { ModalDialogComponent } from '../modal/modal.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

    @ViewChild(ModalDialogComponent) modalDialog: ModalDialogComponent;

    private sellers: TradeModel[] = [];
    private buyers: TradeModel[] = [];
    private sub: any;

    constructor(
        private navigationController: NavigationController,
        private activatedRoute: ActivatedRoute,
        private authController: AuthController
    ) {
        let testSeller = new TradeModel('HaoLeThien', 65628843, 0.49751243, 'DASH', 'VND', 'Vietcombank');

        this.sellers.push(testSeller);
        this.sellers.push(testSeller);
        this.sellers.push(testSeller);
        this.sellers.push(testSeller);
        this.sellers.push(testSeller);

        this.buyers.push(testSeller);
        this.buyers.push(testSeller);
        this.buyers.push(testSeller);
        this.buyers.push(testSeller);
        this.buyers.push(testSeller);
    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            let token = params['token'];
            if (token) {
                window.history.pushState("", "", '/#/home');
                this.authController.verifyToken(token);
            }
        });
        this.authController.onLoginCompleted.subscribe(data => this.handleLoginCompleted(data))
        // this.modalDialog.showModalDialog('haole');
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onLoginButtonClick() {
        this.navigationController.goToLoginPage();
    }

    onListBuyingButtonClick() {
        this.navigationController.goToInitPurchasePage();
    }

    onListSellingButtonClick() {
        this.navigationController.goToInitSellingPage();
    }

    handleLoginCompleted(data: VerifyResponse) {
        if (!data) {
            return;
        }
        console.log("home: " + JSON.stringify(data));

        if (data.newUser === false) {
            return;
        }

        this.navigationController.goToFirstLoginPage({
            email: data.email
        });
    }

}

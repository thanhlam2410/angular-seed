/**
 * Created by haole on 6/9/17.
 */
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BaseController } from './base.controller';

@Injectable()
export class NavigationController extends BaseController {

    constructor(
        private router: Router) {
        super(router);
    }

    goToLoginPage(params?: any) {
        this.navigateTo('login', params);
    }

    goToFirstLoginPage(params?: any) {
        this.navigateTo('first-login', params);
    }

    goToHomePage(params?: any) {
        this.navigateTo('home', params);
    }

    goToInitPurchasePage(params?: any) {
        this.navigateTo('init-purchase', params);
    }

    goToPhonePurchasePage(params?: any) {
        this.navigateTo('phone-purchase', params);
    }

    goToConfirmPhonePage(params?: any) {
        this.navigateTo('confirm-phone', params);
    }

    goToPaymentPurchase(params?: any) {
        this.navigateTo('payment-purchase', params);
    }

    goToPaymentCompletedPurchasePage(params?: any) {
        this.navigateTo('completed-purchase', params);
    }

    goToTransferPurchasePage(params?: any) {
        this.navigateTo('transfer-purchase', params);
    }

    goToInitSellingPage(params?: any) {
        this.navigateTo('init-selling', params);
    }

    goToBankingSellingPage(params?: any) {
        this.navigateTo('banking-selling', params);
    }

    goToTransferSellingPage(params?: any) {
        this.navigateTo('transfer-selling', params);
    }

    goToPaymentSellingPage(params?: any) {
        this.navigateTo('payment-selling', params);
    }
    

}

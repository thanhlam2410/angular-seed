/**
 * Created by haole on 6/8/17.
 */
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { InitPurchaseComponent } from './components/init-purchase/init-purchase.component';
import { PhonePurchaseComponent } from './components/phone-purchase/phone-purchase.component';
import { ConfirmPhoneComponent } from './components/confirm-phone/confirm-phone.component';
import { PaymentPurchaseComponent } from './components/payment-purchase/payment-purchase.component';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';
import { TransferPurchaseComponent } from './components/transfer-purchase/transfer-purchase.component';
import { InitSellingComponent } from './components/init-selling/init-selling.component';
import { BankingSellingComponent } from './components/banking-selling/banking-selling.component';
import { TransferSellingComponent } from './components/transfer-selling/transfer-selling.component';
import { PaymentSellingComponent } from './components/payment-selling/payment-selling.component';
import { CompletedSellingComponent } from './components/completed-selling/completed-selling.component';
import { CreateAdsComponent } from './components/create-ads/create-ads.component';
import { LegalPolicyComponent } from './components/legal-policy/legal-policy.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/:token', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'first-login', component: FirstLoginComponent },
    { path: 'init-purchase', component: InitPurchaseComponent },
    { path: 'phone-purchase', component: PhonePurchaseComponent },
    { path: 'confirm-phone', component: ConfirmPhoneComponent },
    { path: 'payment-purchase', component: PaymentPurchaseComponent },
    { path: 'completed-purchase', component: CompletedPurchaseComponent },
    { path: 'transfer-purchase', component: TransferPurchaseComponent },
    { path: 'init-selling', component: InitSellingComponent },
    { path: 'banking-selling', component: BankingSellingComponent },
    { path: 'transfer-selling', component: TransferSellingComponent },
    { path: 'payment-selling', component: PaymentSellingComponent },
    { path: 'completed-selling', component: CompletedSellingComponent },
    { path: 'create-ads', component: CreateAdsComponent },
    { path: 'legal-policy', component: LegalPolicyComponent }
];

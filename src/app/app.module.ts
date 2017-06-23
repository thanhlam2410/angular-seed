import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';

import { NavigationController } from './controllers/navigation.controller';

// Load SharedModule
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeOpeningComponent } from './components/home/home-opening/home-opening.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { LoginComponent } from './components/login/login.component';
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { InitPurchaseComponent } from './components/init-purchase/init-purchase.component';
import { PhonePurchaseComponent } from './components/phone-purchase/phone-purchase.component';
import { ModalDialogComponent } from './components/modal/modal.component';
import { ConfirmPhoneComponent } from './components/confirm-phone/confirm-phone.component';
import { PaymentPurchaseComponent } from './components/payment-purchase/payment-purchase.component';
import { StepNavComponent } from './components/step-nav/step-nav.component';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';
import { TransferPurchaseComponent } from './components/transfer-purchase/transfer-purchase.component';
import { InitSellingComponent } from './components/init-selling/init-selling.component';
import { BankingSellingComponent } from './components/banking-selling/banking-selling.component';
import { TransferSellingComponent } from './components/transfer-selling/transfer-selling.component';
import { PaymentSellingComponent } from './components/payment-selling/payment-selling.component';
import { CompletedSellingComponent } from './components/completed-selling/completed-selling.component';
import { CreateAdsComponent } from './components/create-ads/create-ads.component';
import { LegalPolicyComponent } from './components/legal-policy/legal-policy.component';

//Load services
import { AuthService } from './services/auth.service';
import { HomeService } from './services/home.service';

//Load controllers
import { AuthController } from './controllers/auth.controller';
import { HomeController } from './controllers/home.controller';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        HomeOpeningComponent,
        HomeListComponent,
        LoginComponent,
        FirstLoginComponent,
        InitPurchaseComponent,
        PhonePurchaseComponent,
        ModalDialogComponent,
        ConfirmPhoneComponent,
        PaymentPurchaseComponent,
        StepNavComponent,
        CompletedPurchaseComponent,
        TransferPurchaseComponent,
        InitSellingComponent,
        BankingSellingComponent,
        TransferSellingComponent,
        PaymentSellingComponent,
        CompletedSellingComponent,
        CreateAdsComponent,
        LegalPolicyComponent
    ],
    providers: [
        NavigationController,
        AuthService,
        AuthController,
        HomeService,
        HomeController
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

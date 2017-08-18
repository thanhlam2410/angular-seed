import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { AppSettings } from './config/config';

// Load SharedModule

//Load services
import { Cookie } from './services/cookie.service';

//Load controllers
import { NavigationController } from './controllers/navigation.controller';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: true }),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        NavigationController,
        CookieService,
        Cookie
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

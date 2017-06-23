import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseController } from './base.controller';

@Injectable()
export class HomeController extends BaseController {
    private clientId: String = "";

    constructor(
        private router: Router) {
        super(router);
    }

    generateClientId() {
        this.clientId = (Math.floor(Math.random() * 900000 + 100000)).toString();
    }

    getClientId() {
        return this.clientId;
    }
}
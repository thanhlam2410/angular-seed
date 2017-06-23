import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AccessResponse } from '../models/responses/access.response';
import { BaseController } from './base.controller';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { HomeController } from './home.controller';
import { IpModel } from '../models/ip.model';
import { UpdateProfileResponse } from '../models/responses/update-profile.response';

@Injectable()
export class AuthController extends BaseController {
    public onLoginCompleted: Subject<any> = new Subject();
    public onUpdateProfileCompleted: Subject<any> = new Subject();

    constructor(
        private authService: AuthService,
        private router: Router,
        private homeController: HomeController) {
        super(router);
    }

    getAccess(email: string) {
        this.authService.requestSigninSession(email)
            .then(data => {
                let model = AccessResponse.parse(data);
                console.log(model);
            });
    }

    verifyToken(token: string) {
        let clientId = this.homeController.getClientId();
        this.authService.getClientIP().then(ipInfo => {
            let ipModel = IpModel.parse(ipInfo);

            this.authService.validateAccessToken(token, clientId, ipModel.ip).then(data => {
                this.onLoginCompleted.next(data);
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    }

    updateProfile(email: string, phone: string, nickname: string) {
        let params = {
            email: email,
            phone: phone,
            nickname: nickname
        };

        this.authService.updateUserProfile(params).then(data => {
            let model = UpdateProfileResponse.parse(data);
            this.onUpdateProfileCompleted.next(model);
        }).catch(err => {
            console.log(err);
        });
    }
}
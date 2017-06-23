import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../config/config';
import 'rxjs/add/operator/toPromise';
import { BaseService } from './base.service';

@Injectable()
export class AuthService extends BaseService {
    constructor(private http: Http) {
        super();
    }

    requestSigninSession(email: any) {
        let url = AppSettings.API_ENDPOINT + "/user/access"
        url += "?email=" + email;

        return this.http.get(url)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    }

    validateAccessToken(token: any, clientId: any, ip: any) {
        let url = AppSettings.API_ENDPOINT + "/user/verify"
        url += "?token=" + token;
        url += "&clientId=" + clientId;
        url += "&ip=" + ip;

        return this.http.get(url)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    }

    getClientIP() {
        let url = "https://api.ipify.org?format=json"; //AppSettings.API_ENDPOINT + "/misc/ip";
        return this.http.get(url)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    }

    updateUserProfile(params: any) {
        let url = AppSettings.API_ENDPOINT + "/user/update";
        return this.http.post(url, params)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    }
}
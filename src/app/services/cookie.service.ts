import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';

@Injectable()
export class Cookie {
    constructor(private _cookieService: CookieService) { }

    getCookie(key: string) {
        return this._cookieService.get(key);
    }

    saveCookie(key: string, value: string) {
        let d: Date = new Date();
        d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
        // let expires: string = d.toUTCString();

        let opts = {
            expires: d
        };

        return this._cookieService.put(key, value, opts);
    }
}
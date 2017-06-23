import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { AppSettings } from '../config/config';
import 'rxjs/add/operator/toPromise';
import { BaseService } from './base.service';

@Injectable()
export class HomeService extends BaseService {
    constructor(private http: Http) {
        super();
    }
}
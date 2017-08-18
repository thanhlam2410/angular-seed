import { Http, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class BaseService {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    protected handleResponse(response: any): Promise<any> {
        let data = response.json() || null;
        return Promise.resolve(data);
    }

    protected handleError(error: any): Promise<any> {
        try {
            if (!error) {
                return Promise.reject("Unknown Error");
            }

            let err = error.json();

            if (err.message) {
                return Promise.reject({
                    message: error.message
                });
            }

            if (err.error) {
                return Promise.reject({
                    message: err.error
                });
            }

            return Promise.reject(JSON.stringify(err));
        }
        catch (e) {
            return Promise.reject(error);
        }
    }

    protected get(url: string, headers: Headers) {
        return this.http.get(url, {
            headers: headers
        }).toPromise();
    }

    protected post(url: string, data: any, headers: Headers) {
        return this.http.post(url, data, {
            headers: headers
        }).toPromise();
    }
}
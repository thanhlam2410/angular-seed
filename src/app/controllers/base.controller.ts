import { Router } from '@angular/router';

export class BaseController {
    private route: Router;
    private routes: String[];

    constructor(router: Router) {
        this.route = router;
    }

    navigateTo(pageName: String, params?: any): void {
        if (params) {
            this.route.navigate(['/' + pageName], { queryParams: params });
        } else {
            this.route.navigate(['/' + pageName]);
        }
    }
}
/**
 * Created by haole on 6/7/17.
 */
import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { BaseComponent } from './components/BaseComponent';
import { Cookie } from './services/cookie.service';
import { NavigationController } from './controllers/navigation.controller';
import { SocketService } from './services/socket.service';
import { Observable, Subscription } from 'rxjs/Rx';

declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements AfterViewInit {
    private authData: any;
    private clientID: string;
    constructor(private cookieService: Cookie,
        private navigationController: NavigationController,
        private socketService: SocketService) {
        super();
    }
}

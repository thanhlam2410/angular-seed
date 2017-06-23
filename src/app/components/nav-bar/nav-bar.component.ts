/**
 * Created by haole on 6/8/17.
 */
import  {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
    @Input('logged-in') loggedIn: boolean = false;
    @Input('user-name') userName: string;

    @Output() tradeClick = new EventEmitter<any>();
    @Output() walledClick = new EventEmitter<any>();
    @Output() contactClick = new EventEmitter<any>();
    @Output() profileClick = new EventEmitter<any>();
    @Output() logoutClick = new EventEmitter<any>();
    @Output() loginClick = new EventEmitter<any>();

    ngOnInit() {
    }

    onTradeClick() {
        this.tradeClick.emit();
    }

    onWalledClicl() {
        this.walledClick.emit();
    }

    onContactClick() {
        this.contactClick.emit();
    }

    onProfileClick() {
        this.profileClick.emit();
    }

    onLoginClick() {
        this.loginClick.emit();
    }

    onLogoutClick() {
        this.logoutClick.emit();
    }
}

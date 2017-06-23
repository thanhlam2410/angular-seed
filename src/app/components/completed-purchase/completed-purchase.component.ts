import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../../models/nav-item.model';

@Component({
    selector: 'app-completed-purchase',
    templateUrl: './completed-purchase.component.html',
    styleUrls: ['./completed-purchase.component.css']
})

export class CompletedPurchaseComponent implements OnInit {

    private navItems: NavItemModel[] = [];

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Xác thực giao dịch', 'active'),
            new NavItemModel('3. Thanh toán', 'active'),
            new NavItemModel('4. Chuyển DASH', 'focus')
        ];

    }

}

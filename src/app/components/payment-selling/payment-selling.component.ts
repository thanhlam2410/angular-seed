import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../../models/nav-item.model';

@Component({
    selector: 'app-payment-selling',
    templateUrl: './payment-selling.component.html',
    styleUrls: ['./payment-selling.component.css']
})

export class PaymentSellingComponent implements OnInit {

    private navItems: NavItemModel[] = [];

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Nạp DASH', 'active'),
            new NavItemModel('3. Thanh toán', 'focus'),
            new NavItemModel('4. Chuyển DASH', 'inactive')
        ];

    }

}

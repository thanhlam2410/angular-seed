import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../../models/nav-item.model';

@Component({
    selector: 'app-completed-selling',
    templateUrl: './completed-selling.component.html',
    styleUrls: ['./completed-selling.component.css']
})

export class CompletedSellingComponent implements OnInit {

    private navItems: NavItemModel[] = [];

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Nạp DASH', 'active'),
            new NavItemModel('3. Thanh toán', 'active'),
            new NavItemModel('4. Chuyển DASH', 'active')
        ];
    }

}

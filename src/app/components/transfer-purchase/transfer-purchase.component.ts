import { Component, OnInit } from '@angular/core';
import { NavItemModel } from '../../models/nav-item.model';
import { NavigationController } from '../../controllers/navigation.controller';

@Component({
    selector: 'app-transfer-purchase',
    templateUrl: './transfer-purchase.component.html',
    styleUrls: ['./transfer-purchase.component.css']
})

export class TransferPurchaseComponent implements OnInit {
    private navItems: NavItemModel[] = [];

    constructor(
        private navigationController: NavigationController) {
    }

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Xác thực giao dịch', 'active'),
            new NavItemModel('3. Thanh toán', 'active'),
            new NavItemModel('4. Chuyển DASH', 'active')
        ];

    }

}

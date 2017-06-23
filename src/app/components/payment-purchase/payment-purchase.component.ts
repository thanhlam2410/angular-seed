import { Component, OnInit } from '@angular/core';
import { NavigationController } from '../../controllers/navigation.controller';
import { NavItemModel} from '../../models/nav-item.model';

@Component({
    selector: 'payment-purchase',
    templateUrl: './payment-purchase.component.html',
    styleUrls: ['./payment-purchase.component.css']
})

export class PaymentPurchaseComponent implements OnInit {

    private navItems: NavItemModel[] = [];

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Xác thực giao dịch', 'active'),
            new NavItemModel('3. Thanh toán', 'focus'),
            new NavItemModel('4. Chuyển DASH', 'inactive')
        ];

    }

    constructor(
        private navigationController: NavigationController) {
    }

    onPaymentDoneButtonClicked() {
        this.navigationController.goToPaymentCompletedPurchasePage();
    }

}
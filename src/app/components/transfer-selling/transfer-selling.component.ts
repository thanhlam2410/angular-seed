/**
 * Created by haole on 6/9/17.
 */
import { Component, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationController } from '../../controllers/navigation.controller';
import { emailValidator } from '../../directives/email-validator.directive';
import { NavItemModel } from '../../models/nav-item.model';

@Component({
    selector: 'app-trnsfer-sellinf',
    templateUrl: './transfer-selling.component.html',
    styleUrls: ['./transfer-selling.component.css']
})

export class TransferSellingComponent implements OnInit {

    private navItems: NavItemModel[] = [];

    constructor(
        private navigationController: NavigationController,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.navItems = [
            new NavItemModel('1. Khởi tạo giao dịch', 'active'),
            new NavItemModel('2. Nạp DASH', 'focus'),
            new NavItemModel('3. Thanh toán', 'inactive'),
            new NavItemModel('4. Chuyển DASH', 'inactive')
        ];

    }

 
    onContinueButtonClicked(value: any, form: any) {
    
    }



}


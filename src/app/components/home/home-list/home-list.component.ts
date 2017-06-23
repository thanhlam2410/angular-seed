import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TradeModel } from '../../../models/trade.model';

@Component({
    selector: 'app-home-list',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.css']
})

export class HomeListComponent {

    @Input() title = '';
    @Input() buttonTitle = '';
    @Input() currentPage = 1;
    @Input() type = 'selling'; //buying - selling
    @Input() items: TradeModel[] = [];

    @Output() buyingButtonClick: EventEmitter<any> = new EventEmitter();
    @Output() sellingButtonClick: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onButtonClick() {
        if (this.type === 'selling') {
            this.buyingButtonClick.emit();
        } else {
            this.sellingButtonClick.emit();
        }
    }

}
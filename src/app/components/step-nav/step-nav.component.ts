import { Component, Input } from '@angular/core';
import { NavItemModel } from '../../models/nav-item.model';

@Component({
    selector: 'app-step-nav',
    templateUrl: './step-nav.component.html',
    styleUrls: ['./step-nav.component.css',
        '../../../../node_modules/bootstrap-nav-wizard/bootstrap-nav-wizard.css']
})

export class StepNavComponent {

    @Input() items: NavItemModel[] = [];

}
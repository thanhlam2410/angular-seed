import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
    protected activatedRoute: ActivatedRoute;
    protected onQueriesApplied: Subject<any> = new Subject<any>();
    protected onParamsApplied: Subject<any> = new Subject<any>();
    protected onAfterViewInit: Subject<any> = new Subject<any>();
    protected onNgDestroy: Subject<any> = new Subject<any>();
    protected query: any = {};
    protected params: any = {};
    constructor() { }

    ngOnInit() {
        if (!this.activatedRoute) {
            return;
        }

        this.activatedRoute.queryParams.subscribe(inputs => {
            this.query = inputs;
            this.onQueriesApplied.next(inputs);
        });

        this.activatedRoute.params.subscribe(inputs => {
            this.params = inputs;
            this.onParamsApplied.next(inputs);
        })
    }

    ngAfterViewInit() {
        this.onAfterViewInit.next();
    }

    showLoadingBar() {
    }

    ngOnDestroy() {
        this.onNgDestroy.next();
    }

    formatPrice(price: number) {
        return Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    transactionFeePercent() {
        return 0.05;
    }
}
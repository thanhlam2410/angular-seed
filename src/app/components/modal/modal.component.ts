import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal.component.html'
})

export class ModalDialogComponent implements OnInit {
    public modalTitle: string = '';

    constructor() {
    }

    ngOnInit() {
    }

    showModalDialog(modalTitle: string) {
        this.modalTitle = modalTitle;
        $('#ModalDialog').modal({ show: true })
    }

    closeModalEditDialog() {
        $('#ModalDialog').modal('hide');
    }

}

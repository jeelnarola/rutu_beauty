import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-service-popup',
  templateUrl: './service-popup.component.html',
  styleUrls: ['./service-popup.component.scss']
})
export class ServicePopupComponent {
  @Input() title: string='';
  constructor(public bsModalRef: BsModalRef) {}
}

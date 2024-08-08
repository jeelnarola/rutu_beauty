import { Component, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ServicePopupComponent } from '../shared/servicePopup/service-popup.component';
import { EnquirePopupComponent } from '../shared/enquire-popup/enquire-popup.component';

@Component({
  selector: 'app-service-show',
  templateUrl: './service-show.component.html',
  styleUrls: ['./service-show.component.scss']
})
export class ServiceShowComponent {
  public bsModalRef!:BsModalRef
  @ViewChild("ServicePopup") ServicePopup!:ServicePopupComponent
  @ViewChild('EnquirePopup') EnquirePopup!:EnquirePopupComponent
  constructor(private modalService: BsModalService) {
  }
  openpopo(){
    let data = {
      title: "Service Add"
    };
    this.bsModalRef=this.modalService.show(ServicePopupComponent,{initialState: data,backdrop:'static'})
  }
  enquireBtn(){
    this.bsModalRef=this.modalService.show(EnquirePopupComponent)
  }
}

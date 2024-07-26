import { Component, ElementRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ServicePopupComponent } from './shared/service-popup/service-popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rutu_beauty';
  @ViewChild('popo',{static:true}) popo:ElementRef | undefined
  constructor(public bsModalRef:BsModalRef, public modelService:BsModalService){

  }
  showpopo(){
    // this.bsModalRef=this.modelService.show(ServicePopupComponent)
  }
}

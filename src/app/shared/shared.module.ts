import { NgModule } from '@angular/core';
import { ServicePopupComponent } from './servicePopup/service-popup.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ServicePopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServicePopupComponent
  ]
})
export class SharedModule { }

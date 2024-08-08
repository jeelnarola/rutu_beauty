import { NgModule } from '@angular/core';
import { ServicePopupComponent } from './servicePopup/service-popup.component';
import { CommonModule } from '@angular/common';
import { EnquirePopupComponent } from './enquire-popup/enquire-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryPopupComponent } from './gallery-popup/gallery-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ServicePopupComponent,
    EnquirePopupComponent,
    GalleryPopupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports:[
    ServicePopupComponent
  ]
})
export class SharedModule { }

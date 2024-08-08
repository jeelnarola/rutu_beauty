import { Component, ViewChild } from '@angular/core';
import { ServicePopupComponent } from '../shared/servicePopup/service-popup.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GalleryPopupComponent } from '../shared/gallery-popup/gallery-popup.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public bsModalRef!:BsModalRef
@ViewChild("serviceGallery") serviceGallery!:GalleryPopupComponent
constructor(private modalService: BsModalService) {
}
openpopo(){
  let data = {
    title: "Galley Add"
  };
  this.bsModalRef=this.modalService.show(GalleryPopupComponent,{initialState: data,backdrop:'static'})
}
}

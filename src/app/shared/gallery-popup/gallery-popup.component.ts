import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.scss']
})
export class GalleryPopupComponent {
  public bsModalRef!: BsModalRef
  @Input() title: string='';
  @ViewChild('fileInput') fileInput!: ElementRef;
  imgShow:boolean=true
  imgUplo:boolean=false
  fileSrc:string| ArrayBuffer | null | undefined="../../../assets/Image/1.png"
  form: any;
  constructor(private modalService: BsModalService) {
    this.form =new FormGroup({
      image:new FormControl(null,[Validators.required])
    })
  }
  openFileDialog() {
    this.fileInput.nativeElement.click();
  }
  close(): void {
    this.modalService.hide()
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.fileSrc = e.target?.result; // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  serviceAdd(){
    let image=this.form.value.image.split("\\")
    image=image.pop()
    let playlod={
      ...this.form.value,
      image:image
    }
    console.log(playlod)
  }
}

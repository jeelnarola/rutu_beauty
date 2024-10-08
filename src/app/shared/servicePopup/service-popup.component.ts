import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-service-popup',
  templateUrl: './service-popup.component.html',
  styleUrls: ['./service-popup.component.scss']
})
export class ServicePopupComponent {
  @Input() title: string='';
  @ViewChild('fileInput') fileInput!: ElementRef;
  imgShow:boolean=true
  imgUplo:boolean=false
  fileSrc:string| ArrayBuffer | null | undefined="../../../assets/Image/1.png"
  form: any;
  constructor(public bsModalRef: BsModalRef) {
    this.form =new FormGroup({
      image:new FormControl("",[Validators.required]),
      name:new FormControl("",[Validators.required]),
      des:new FormControl("",[Validators.required])
    })
  }
  openFileDialog() {
    this.fileInput.nativeElement.click();
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
  }
}

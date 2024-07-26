import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-icon',
  templateUrl: './side-icon.component.html',
  styleUrls: ['./side-icon.component.scss']
})
export class SideIconComponent {
  sendmsg(){
    const phoneNumber = '+91 8980672209'; // Replace with the recipient's phone number (include country code)
    const message = 'Hello, I would like to inquire about your services.'; // Replace with your message
    // const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    // window.open(whatsappURL, '_blank');
    const encodedMessage = encodeURIComponent(message);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let url = '';

    if (isMobile) {
      url = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }

    window.open(url, '_blank');
  }
  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  isButtonVisible=false
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonVisible = window.pageYOffset > 500;
  }
}

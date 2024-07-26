import { NgModule, NgModuleRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BennerComponent } from './benner/benner.component';
import { DemoComponent } from './demo/demo.component';
import { SideIconComponent } from './side-icon/side-icon.component';
import { ServiceShowComponent } from './service-show/service-show.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BennerComponent,
    DemoComponent,
    SideIconComponent,
    ServiceShowComponent,
    AboutUsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

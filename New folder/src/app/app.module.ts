import { NgModule } from '@angular/core';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

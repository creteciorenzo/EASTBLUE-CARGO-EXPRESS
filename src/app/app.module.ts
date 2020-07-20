import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import * as $ from "jquery";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./body/home-page/home-page.component";
import { AboutEceComponent } from './body/about-ece/about-ece.component';
import { ServicesComponent } from './body/services/services.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutEceComponent, ServicesComponent, NavigationComponent, ContactUsComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

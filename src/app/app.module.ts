import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as $ from "jquery";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from "./main/main.component";
import { HomePageComponent } from "./home-page/home-page.component";

import { SidebarModule } from "ng-sidebar";
import { FooterComponent } from './footer/footer.component';
import { ServiceWeOfferComponent } from './service-we-offer/service-we-offer.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [AppComponent, MainComponent, HomePageComponent, FooterComponent, ServiceWeOfferComponent, WhyChooseUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    SidebarModule.forRoot()
  ],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

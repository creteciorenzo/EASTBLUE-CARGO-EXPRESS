import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import * as $ from "jquery";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from "./main/main.component";
import { HomePageComponent } from "./body/home-page/home-page.component";

import { SidebarModule } from "ng-sidebar";
import { FooterComponent } from './footer/footer.component';
import { ServiceWeOfferComponent } from './body/service-we-offer/service-we-offer.component';
import { WhyChooseUsComponent } from './body/why-choose-us/why-choose-us.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutEceComponent } from './body/about-ece/about-ece.component';
import { ServicesComponent } from './body/services/services.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [AppComponent, MainComponent, HomePageComponent, FooterComponent, ServiceWeOfferComponent, WhyChooseUsComponent, AboutEceComponent, ServicesComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FormsModule,
    SidebarModule.forRoot()
  ],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

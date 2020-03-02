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

@NgModule({
  declarations: [AppComponent, MainComponent, HomePageComponent, FooterComponent, ServiceWeOfferComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()
  ],
  exports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

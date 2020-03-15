import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./body/home-page/home-page.component";
import { AboutEceComponent } from './body/about-ece/about-ece.component';
import { ServicesComponent } from './body/services/services.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '', component: NavigationComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutEceComponent },
      { path: 'services', component: ServicesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: "enabled", onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

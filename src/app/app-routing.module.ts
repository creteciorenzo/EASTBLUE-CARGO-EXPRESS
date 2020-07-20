import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./body/home-page/home-page.component";
import { AboutEceComponent } from './body/about-ece/about-ece.component';
import { ServicesComponent } from './body/services/services.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '', component: NavigationComponent,
    children: [

      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutEceComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./body/home-page/home-page.component";
import { AboutEceComponent } from './body/about-ece/about-ece.component';
import { ServicesComponent } from './body/services/services.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutEceComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

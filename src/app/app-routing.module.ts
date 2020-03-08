import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./body/home-page/home-page.component";
import { AboutEceComponent } from './body/about-ece/about-ece.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutEceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

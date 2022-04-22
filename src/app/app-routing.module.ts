import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {AboutMeComponent} from "./about-me/about-me.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'about', component: AboutMeComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

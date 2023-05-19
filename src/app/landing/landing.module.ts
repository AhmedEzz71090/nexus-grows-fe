import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components/landing/landing.component';
import {InputTextModule} from "primeng/inputtext";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ChipsModule,
    FormsModule,
    ButtonModule
  ]
})
export class LandingModule {
}

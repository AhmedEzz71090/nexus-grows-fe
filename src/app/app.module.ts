import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { ProductsComponent } from './products/components/products/products.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {LandingModule} from "./landing/landing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CardModule,
    ButtonModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

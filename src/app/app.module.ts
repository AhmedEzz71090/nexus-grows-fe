import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { ProductsComponent } from './products/components/products/products.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {LandingModule} from "./landing/landing.module";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {UsersComponent} from "./users/users/users.component";
import {CompaniesComponent} from "./companies/components/companies/companies.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    CompaniesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CardModule,
        ButtonModule,
        LandingModule,
        HttpClientModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

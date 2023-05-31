import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import { TableComponent } from './components/table/table.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from "primeng/breadcrumb";



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    BreadcrumbComponent
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    BreadcrumbModule
  ]
})
export class SharedModule { }

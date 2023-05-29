import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/components/products/products.component";
import {LandingComponent} from "./landing/components/landing/landing.component";
import {UsersComponent} from "./users/users/users.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

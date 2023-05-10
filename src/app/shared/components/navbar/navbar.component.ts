import { Component } from '@angular/core';
import {BsDropdownConfig} from "ngx-bootstrap/dropdown";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavbarComponent {

  changeLanguage() {
    console.log('Language changed!')
  }
}

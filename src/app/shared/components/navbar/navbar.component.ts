import {Component, OnInit} from '@angular/core';
import {BsDropdownConfig} from "ngx-bootstrap/dropdown";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{provide: BsDropdownConfig, useValue: {isAnimated: true, autoClose: true}}]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setMenuBarItems();
    this.setUserMenuItems();
  }

  setMenuBarItems() {
    this.items = this.items = [
      {
        label: 'products',
        command: () => {
          this.router.navigate(['products']);
        },
        styleClass: 'navigation-text'
      },
      {
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Language',
            icon: 'pi pi-fw pi-globe',
            command: () => {
              this.changeLanguage();
            }
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out'
          },
        ],
        styleClass: 'user-menu'
      },
    ];
  }

  setUserMenuItems() {
    this.userMenuItems = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
        {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
        {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
      ]
    }];
  }

  changeLanguage() {
    console.log('Language changed!')
  }
}

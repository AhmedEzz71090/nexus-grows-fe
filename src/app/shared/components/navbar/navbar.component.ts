import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsDropdownConfig} from "ngx-bootstrap/dropdown";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";
import {takeWhile} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{provide: BsDropdownConfig, useValue: {isAnimated: true, autoClose: true}}]
})
export class NavbarComponent implements OnInit, OnDestroy {
  alive: boolean = true;
  navBarItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];
  isLogin: boolean | undefined;
  signUp: boolean | undefined;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.getLoginVal();
    this.getSignupVal();
    this.setMenuBarItems();
    this.setUserMenuItems();
  }

  private setMenuBarItems() {
    this.navBarItems = [
      {
        label: 'products',
        command: () => {
          this.router.navigate(['products']);
        },
        styleClass: 'navigation-text'
      },
      {
        label: 'Login',
        command: () => {
          this.authService.logIn.next(true);
          this.authService.signup.next(false);
          this.getLoginVal();
          this.getSignupVal();
          this.setMenuBarItems();
        },
        styleClass: 'navigation-text',
        visible: this.signUp
      },
      {
        label: 'Signup',
        command: () => {
          this.authService.signup.next(true);
          this.authService.logIn.next(false);
          this.getLoginVal();
          this.getSignupVal();
          this.setMenuBarItems();
        },
        styleClass: 'navigation-text',
        visible: this.isLogin
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

  private setUserMenuItems() {
    this.userMenuItems = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
        {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
        {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
      ]
    }];
  }

  private changeLanguage() {
    // console.log('Language changed!')
  }

  private getLoginVal() {
    this.authService.logIn.pipe(takeWhile(() => this.alive)).subscribe({
      next: res => {
        this.isLogin = res;
      }
    })
  }

  private getSignupVal() {
    this.authService.signup.pipe(takeWhile(() => this.alive)).subscribe({
      next: res => {
        this.signUp = res;
      }
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

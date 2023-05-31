import { Component, OnInit } from '@angular/core';
import users from '../users/Users.json'
import {Router} from "@angular/router";
import {SharedService} from "../../shared/services/shared.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';

  constructor(private router: Router, private sharedService: SharedService) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Users',
        styleClass: 'last-breadcrumb',
      }
    ])
  }
  ngOnInit() {
    this.cid = this.router.url;
    this.data = users;
    this.refactorData(this.data);
    setTimeout(() => {
      this.cols = [
        {field: 'fullName', header: 'Name'},
        {field: 'userRole', header: 'Role'},
        {field: 'userType', header: 'Type'},
        {field: 'userEmail', header: 'Email'},
        {field: 'companyName', header: 'Company'},
      ];
    }, 0)
    this.filterCols = ['fullName', 'userType', 'companyName']
  }

  refactorData(data: any[]): any[] {
    data.forEach((user: any) => {
      user.companyName = user.companyProfile[0].companyName;
    })
    return data;
  }
}

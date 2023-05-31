import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../../shared/services/shared.service";
import companies from "../companies/companies.json"

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit{
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';

  constructor(private router: Router, private sharedService: SharedService) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Companies',
        styleClass: 'last-breadcrumb',
      }
    ])
  }
  ngOnInit() {
    this.cid = this.router.url;
    this.data = companies;
    this.refactorData(this.data);
    this.cols = [
      {field: 'companyName', header: 'Company Name'},
      {field: 'companyEmail', header: 'Email'},
      {field: 'companyWebsiteUrl', header: 'Website'},
      {field: 'companyLocation', header: 'Location'}
    ];
    this.filterCols = ['companyName', 'companyLocation']
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {})
    return data;
  }
}

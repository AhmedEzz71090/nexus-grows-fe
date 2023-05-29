import {Component, OnInit} from '@angular/core';
import products from '../products/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];

  ngOnInit() {
    this.data = products;
    this.refactorData(this.data);
    this.cols = [
      {field: 'productName', header: 'Product Name'},
      {field: 'productQuantity', header: 'Quantity'},
      {field: 'productType', header: 'Category'},
      {field: 'productCountryOfOrigin', header: 'Country'}
    ];
    this.filterCols = ['productName', 'productType', 'productCountryOfOrigin']
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {
      product.productQuantity = `${product.productQuantity} ${product.productMetric}`
    })
    return data;
  }
}

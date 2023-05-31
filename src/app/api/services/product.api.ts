import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


const baseUrl = 'http://localhost:8080/api/';

@Injectable({
    providedIn: 'root',
})
export class ProductAPIs {


    constructor(private http: HttpClient) { }



    findAllProductsAggregated(userId: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseUrl}productsAggregated?userId=${userId}`);
    }

    findByType(productType: string, userId: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseUrl}productsByType/${productType}` + `?userId=${userId}`);
    }

    findByCountryOfOrigin(countryOfOrigin: string, userId: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseUrl}productsByCountry/${countryOfOrigin}` + `?userId=${userId}`);
    }

    findByUserId(userId: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${baseUrl}productsByUserId/` + `?userId=${userId}`);
    }

    create(productData: Product): Observable<any> {
        return this.http.post(`${baseUrl}products`, productData);
    }

}
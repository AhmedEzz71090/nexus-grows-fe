import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';


const baseUrl = 'http://localhost:8080/api/';

@Injectable({
    providedIn: 'root',
})
export class CompanyAPIs {


    constructor(private http: HttpClient) { }


    findAllCompanies(userId: string): Observable<Company[]> {
        return this.http.get<Company[]>(`${baseUrl}companies?userId=${userId}`);
    }


    findByCountry(countryName: string, userId: string): Observable<Company[]> {
        return this.http.get<Company[]>(`${baseUrl}companiesByCountry/${countryName}` + `?userId=${userId}`);
    }


    findByName(companyName: string, userId: string): Observable<Company[]> {
        return this.http.get<Company[]>(`${baseUrl}companyByName/${companyName}` + `?userId=${userId}`);
    }

    create(userId: string, companyData: Company): Observable<any> {
        return this.http.post(`${baseUrl}company?userId=${userId}`, companyData);
    }


   

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';


const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class UserAPIs {


  constructor(private http: HttpClient) { }


  findAllUsers(userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}user?userId=${userId}`);
  }


  findByRole(userRole: string, userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}userByRole/${userRole}` + `?userId=${userId}`);
  }


  findByType(userType: string, userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}userByType/${userType}` + `?userId=${userId}`);
  }

  findById(userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}userById/${userId}`);
  }

  create(userData: User): Observable<any> {
    return this.http.post(`${baseUrl}user`, userData);
  }

  update(userId: string, userData: User): Observable<any> {
    return this.http.put(`${baseUrl}user/${userId}`, userData);
  }


}
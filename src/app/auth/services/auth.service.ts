import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token = 'TOKEN'
  logIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  signup: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }
}

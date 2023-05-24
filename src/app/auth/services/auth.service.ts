import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token = 'TOKEN'
  logIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  signup: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}

import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  login() {
    const body = JSON.stringify(this.loginForm.value);
    this.http.post<any>('https://api.escuelajs.co/api/v1/auth/login', body).subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    })
  }
}

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

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  login() {
    const body = JSON.stringify(this.loginForm.value);
    this.http.post<any>('API_URL', body).subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    })
  }
}

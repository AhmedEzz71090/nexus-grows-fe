import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeWhile} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  formValid = false

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl(),
  })
  private alive = true;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
  }

  signup() {
    const body = JSON.stringify(this.signupForm.value);
    this.http.post<any>('API_URL', body).pipe(takeWhile(()=> this.alive)).subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

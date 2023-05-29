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

  private alive = true;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
  }

  signup(form: any) {
    const body = form.form.value;
    delete body.confirmPassword;
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

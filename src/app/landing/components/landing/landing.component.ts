import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });
  }
}

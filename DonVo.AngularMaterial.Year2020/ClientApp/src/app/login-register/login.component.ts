import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['abc@123.edu', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onValidate() {
    console.log('form error:', this.f.email.errors);
  }

  onloginSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
    console.log('loginForm value', value);
    console.log('loginForm valid', valid);
  }
}

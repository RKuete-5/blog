import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  AuthForm: FormGroup;
  spin = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
      this.AuthForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      });
  }

  login() {
    
  }

}

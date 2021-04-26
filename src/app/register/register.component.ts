import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Users } from '../models/users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users: Users

  registerForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required && Validators.email]),
    password: new FormControl('', [Validators.required && Validators.minLength(5)]),
    mobile: new FormControl('', Validators.required && Validators.minLength(10)),
  })

  // Check username Error

  getUserNameErrorMsg() {
    if (this.registerForm.get('name').invalid && (this.registerForm.get('name').dirty || this.registerForm.get('name').touched)) {
      return "Enetr the UserNmae Properly"
    }
    else {
      return "";
    }
  }

  register() {
    if (this.registerForm.valid) {
      this.users = new Users();
      this.users.name = this.registerForm.get('name').toString();
      alert("Registered User Succesfully")
    }
    else {
      alert("Entered Detailes are not correct")
    }
  }

}

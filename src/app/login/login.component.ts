import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Auth } from '../models/auth';
import { Users } from '../models/users';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  users: Users = new Users();
  auth: Auth = new Auth();
  ngOnInit(): void {
  }

  login() {
    this.auth.username = this.users.email;
    this.auth.password = this.users.password;
    console.log(this.auth);

    this.authService.validateUser(this.auth)
      .subscribe(data => {
        console.log(data['token']);
        this.authService.setToken(data['token']);
        this.router.navigateByUrl('/dashboard');
      },
        error => {
          console.log(error);
        })
    // access 3rd api check users is valid
    //this.router.navigateByUrl('/dashboard');
    // alert("sucess")
  }

}

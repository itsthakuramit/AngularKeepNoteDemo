import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  //check User
  validateUser(user: Auth): Observable<Object> {
    // const header = new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Access-Control-Allow-Origin', '*')
    return this.httpclient.post('http://localhost:3001/auth/v1', user);

  }
  // Store Token
  setToken(token: string): void {
    localStorage.setItem("authToken", token);
  }

  // get Token

  gotToken():string{
    return localStorage.getItem("authToken");
  }
  removeToken():void{
    localStorage.removeItem('authToken');
  }


  //Authenticate the user based on Token

  userauthentication(token:string):Promise<any>{
    
    return this.httpclient.post("http://localhost:3001/auth/v1/isAuthenticated",{},{
      headers: new HttpHeaders().set('Authorization','Bearer ' +token)
    }).toPromise();
  }
}

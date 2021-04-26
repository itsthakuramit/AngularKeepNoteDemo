import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }
  canActivate(): Promise<boolean> {
    return this.authService.userauthentication(this.authService.gotToken())
    .then((response)=>{
      console.log(response);
      return response.isAuthenticated;      
    })
  }


}

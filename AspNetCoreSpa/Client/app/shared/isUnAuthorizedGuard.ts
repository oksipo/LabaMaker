import { CanActivate,Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../Services/authService'

@Injectable()
export class IsUnAuthorizedGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (!this.authService.isAuthorized())
            return true;
        else {
            this.router.navigateByUrl("/home");
            return false;
        }
    }
}
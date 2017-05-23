import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../Services/authService'
@Component({
    selector: "login",
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    constructor(private auth: AuthService, private router: Router) { }
    email: string;
    password: string;
    login = (() => {
        this.auth.login(
            {
                email: this.email,
                password: this.password,
                rememberMe:true
            }).subscribe(x => this.router.navigateByUrl("home"));
    })
}
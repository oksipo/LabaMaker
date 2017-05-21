import { Component } from '@angular/core';
import { AuthService } from "../Services/authService"

@Component({
    selector: "register",
    templateUrl: './register.component.html',
    styleUrls: ['login.component.css']
})
export class RegisterComponent {
    constructor(private auth: AuthService) { }

    userName: string;
    email: string;
    password: string;
    number: string;

    register = (() => {
        this.auth.register(
           {
                userName: this.userName,
                email: this.email,
                password: this.password,
                number: this.number
            }).subscribe();
    })
}
import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProfileService {
    constructor(private http: Http) { }

    public getMe(): Observable<any> {
        return this.http.get("api/profile/me").map(res => res.json());
    }
   
}
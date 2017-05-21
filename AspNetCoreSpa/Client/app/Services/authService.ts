import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorage } from 'h5webstorage';
@Injectable()
export class AuthService {

    constructor(private _http: Http, private localStorage: LocalStorage) { }

    public register(model: any): Observable<any> {
        return this._http.post("api/account/register/", model).map(res => { this.localStorage.setItem("localId", res.json().id); return res.json() })
            .catch(err => { console.error(err); throw (err); });
    }
}
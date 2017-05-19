import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UniversityService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/Universities").map(res => res.json())
    }
}
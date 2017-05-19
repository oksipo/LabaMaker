import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorksService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/Works").map(res => res.json())
    }
}
import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkScreenService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/WorkScreens").map(res => res.json())
    }

    public getByWorkId(workId: number): Observable<any> {

        return this._http.get("api/WorkScreens/forWork/" + workId).map(res => {
            console.log(res);
            return res.json();
        });
    }
}
import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkCommentService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/WorkComments").map(res => res.json())
    }

    public getByWorkId(workId: number): Observable<any> {

        return this._http.get("api/WorkComments/forwork/" + workId).map(res => res.json())
    }
}
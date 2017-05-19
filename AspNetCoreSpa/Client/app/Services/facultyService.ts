import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FacultyService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/Faculties").map(res =>res.json())
    }

    public getByUniversityId(universityId: number): Observable<any> {

        return this._http.get("api/Faculties/byUniversity/"+universityId).map(res => res.json())
    }
}
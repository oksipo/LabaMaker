import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubjectService {

    constructor(private _http: Http) { }

    public getAll(): Observable<any> {

        return this._http.get("api/Subjects").map(res => res.json())
    }

    public getFiltered(universityId: number,facultyId:number, course:number): Observable<any> {

        return this._http.get("api/Subjects/filtered/" + universityId + "&" + facultyId + "&" + course).map(res => res.json())
    }
}
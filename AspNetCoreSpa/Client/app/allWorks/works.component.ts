import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UniversityService } from '../Services/universityService';
import { FacultyService } from '../Services/facultyService'
import { SubjectService } from '../Services/subjectService'
import { WorksService } from '../Services/worksService'
import { SelectItem } from 'primeng/primeng';
import {WorkItem } from '../Models/workItem'

@Component({
    selector: 'works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WorksComponent implements OnInit {

    constructor(private universityService: UniversityService, private facultyService: FacultyService, private subjectService: SubjectService, private worksService:WorksService) {

    }
    universityNames: SelectItem[] = [{ label: 'Всі', value: -1 }];
    facultyNames: SelectItem[] = [{ label: 'Всі', value: -1 }];
    cources: SelectItem[] = [
        { label: 'Всі', value: -1 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 }
    ];
    subjects: SelectItem[] = [{ label: 'Всі', value: -1 }];
    works: WorkItem[] = [];
    selectedUniversity: number = 0;
    selectedFaculty: number = 0;
    selectedCource: number = 0;
    selectedSubject: number = 0;
    getUniversities = (() => {
        this.universityService.getAll().subscribe(
            data => data.map(
                (x: any) => {
                    this.universityNames.push({ label: x.name, value: x.id });
                }));
    })
    getFaculties = (() => {
        if (this.selectedUniversity<1)
        this.facultyService.getAll().subscribe(
            data => data.map(
                (x: any) => {
                    this.facultyNames.push({ label: x.name, value: x.id });
                    }));
        else
            this.facultyService.getByUniversityId(this.selectedUniversity).subscribe(
                data => data.map(
                    (x:any) => {
                        this.facultyNames.push({ label: x.name, value: x.id });
                    }));
    })
    getSubjects = (() => {
        this.subjectService.getFiltered(this.selectedUniversity, this.selectedFaculty, this.selectedCource)
            .subscribe(data => data.map(
                (x: any) => this.subjects.push({ label: x.name, value: x.id })));
    })

    getWorks = (() => {
        this.worksService.getAll()
            .subscribe(data => data.map(
                (x: any) => this.works.push(x)));
    })
    ngOnInit() {
        this.getUniversities();
        this.getFaculties();
        this.getSubjects();
        this.getWorks();
    }



    onUniversitySelected=(() => {
        this.facultyNames = [{ label: 'Всі', value: -1 }];
        this.selectedFaculty = 0;
        this.getFaculties();
        this.subjects = [{ label: 'Всі', value: -1 }];
        this.selectedSubject = 0;
        this.getSubjects();
    })

    onFacultySelected = (() => {
        this.subjects = [{ label: 'Всі', value: -1 }];
        this.selectedSubject = 0;
        this.getSubjects();
    })

    OnCourceSelected = (() => {
        this.subjects = [{ label: 'Всі', value: -1 }];
        this.selectedSubject = 0;
        this.getSubjects();
    })

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkItemComponent } from './workItem.component'

import { UniversityService } from '../Services/universityService'
import { FacultyService } from '../Services/facultyService'
import { SubjectService } from '../Services/subjectService'
import { WorksService } from '../Services/worksService'
import { WorkScreenService } from '../Services/workScreenService'
import { StarComponent } from './star.component';

import { AccordionModule } from 'primeng/primeng';  
import { SharedModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

@NgModule({
    imports: [CommonModule, AccordionModule, SharedModule, GalleriaModule, DialogModule],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        WorkItemComponent,
        AccordionModule,
        GalleriaModule,
        DialogModule,
        SharedModule
    ],
    declarations: [StarComponent, WorkItemComponent],
    providers: [UniversityService, FacultyService, SubjectService, WorksService, WorkScreenService]
})
export class MySharedModule { }

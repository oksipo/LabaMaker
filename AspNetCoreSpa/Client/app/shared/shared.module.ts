import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkItemComponent } from './workItem.component'

import { UniversityService } from '../Services/universityService'
import { FacultyService } from '../Services/facultyService'
import { SubjectService } from '../Services/subjectService'
import { WorksService } from '../Services/worksService'
import { WorkScreenService } from '../Services/workScreenService'
import { WorkCommentService } from '../Services/workCommentService'
import { AuthService } from '../Services/authService'
import { ProfileService } from '../Services/profileService'
import { StarComponent } from './star.component';

import { AccordionModule } from 'primeng/primeng';  
import { SharedModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';

import { WebStorageModule, BROWSER_STORAGE_PROVIDERS } from "h5webstorage";

@NgModule({
    imports: [CommonModule, AccordionModule, SharedModule, GalleriaModule, DialogModule, DropdownModule,
        DataListModule, ButtonModule, FileUploadModule, WebStorageModule],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        WorkItemComponent,
        AccordionModule,
        GalleriaModule,
        DialogModule,
        SharedModule,
        DropdownModule,
        DataListModule,
        ButtonModule,
        FileUploadModule,
        WebStorageModule
    ],
    declarations: [StarComponent, WorkItemComponent],
    providers: [UniversityService, FacultyService, SubjectService, WorksService, WorkScreenService, WorkCommentService, ProfileService, AuthService, BROWSER_STORAGE_PROVIDERS]
})
export class MySharedModule { }

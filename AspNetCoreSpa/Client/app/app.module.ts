import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home/home.component'
import { WorksComponent } from './allWorks/works.component'
import { MySharedModule } from './shared/shared.module';


import { DataListModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';


const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'allWorks', component: WorksComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, WorksComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        // FormsModule,
        HttpModule,
        MySharedModule,
        DropdownModule,
        DataListModule,
        RouterModule.forRoot(AppRoutes)],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

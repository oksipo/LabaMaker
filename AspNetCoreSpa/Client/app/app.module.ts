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
import { AboutUsComponent } from './aboutUs/aboutUs.component'
import { HelpComponent } from './help/help.component'
import { MySharedModule } from './shared/shared.module';
import { TestComponent } from "./Test/test"
import { LoginComponent } from "./Authorization/login.component"
import {RegisterComponent } from "./Authorization/register.component"

const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'allWorks', component: WorksComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'help', component: HelpComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: "test", component: TestComponent },
    { path: "register", component: RegisterComponent }
];

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, WorksComponent, TestComponent, LoginComponent, RegisterComponent, AboutUsComponent, HelpComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        // FormsModule,
        HttpModule,
        MySharedModule,
        RouterModule.forRoot(AppRoutes)],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

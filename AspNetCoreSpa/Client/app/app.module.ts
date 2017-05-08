import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/primeng';  
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home/home.component'
import { SharedModule } from './shared/shared.module';

const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
    imports: [
        AccordionModule,
        BrowserAnimationsModule,
        BrowserModule,
        // FormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forRoot(AppRoutes)],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

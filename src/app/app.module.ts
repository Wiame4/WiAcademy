import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer1Component } from './shared/footer1/footer1.component';
import { Header1Component } from './shared/header1/header1.component';
import { Header2Component } from './shared/header2/header2.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses/courses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer2Component } from './shared/footer2/footer2.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    Footer1Component,
    Header1Component,
    Header2Component,
    FirstPageComponent,
    HomeComponent,
    CoursesListComponent,
    CoursesComponent,
    Footer2Component,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

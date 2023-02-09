import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { CoursesComponent } from './shared/components/courses/courses.component';
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CreateCourseComponent } from './shared/components/create-course/create-course.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { LoginComponent } from './shared/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    HomeComponent,
    CreateCourseComponent,
    PagenotfoundComponent,
    CourseCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

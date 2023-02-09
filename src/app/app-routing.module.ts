import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { CoursesComponent } from './shared/components/courses/courses.component';
import { CreateCourseComponent } from './shared/components/create-course/create-course.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: 'add-course', component: CreateCourseComponent
  },
  {
    path: 'page-not-found', component: PagenotfoundComponent
  },
  {
    path: '**', redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

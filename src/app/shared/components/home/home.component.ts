import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Icourse } from '../../model/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses$!: Observable<Icourse[]>
  beginarCourses$!: Observable<Icourse[]>
  advancedCourses$!: Observable<Icourse[]>

  constructor(private _courseService: CoursesService) { }

  beginarCourses: Icourse[] = [];
  advancedCourses: Icourse[] = [];

  ngOnInit(): void {
    this.beginarCourses = this._courseService.getBeginarsCourses();
    this.advancedCourses = this._courseService.getAdvancedCourses();
    this.courses$ = this._courseService.getObservableData();
    this.beginarCourses$ = this.courses$.pipe(
      map((val)=> val.filter((obj)=> obj.category.toLowerCase().includes('beginner')))
    )
    this.advancedCourses$ = this.courses$.pipe(
      map((val)=> val.filter((obj)=> obj.category.toLowerCase().includes('advanced')))
    )
  }

}

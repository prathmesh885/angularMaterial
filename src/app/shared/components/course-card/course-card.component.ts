import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../model/courses';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Icourse 
  constructor() { }

  ngOnInit(): void {
  }

}

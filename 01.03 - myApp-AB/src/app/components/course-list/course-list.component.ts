import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course-service.service';
import { Course } from '../../models/course';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [],
  providers: [CourseService]
})

export class CourseListComponent implements OnInit {
  courses: Course[];
  errorMessage: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(data => this.courses = data, error => console.log(error));
  }

}

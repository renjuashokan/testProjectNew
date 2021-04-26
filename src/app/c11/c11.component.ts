import { Course } from './../course';
import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11',
  templateUrl: './c11.component.html',
  styleUrls: ['./c11.component.css']
})
export class C11Component implements OnInit {

  courses = COURSES;

  selectedCourse : Course|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(C : Course):void{
    this.selectedCourse = C;
    console.log("selected --"+C.name)
  }

}

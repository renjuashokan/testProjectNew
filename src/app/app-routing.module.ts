import { CourseDetailsComponent } from './course-details/course-details.component';
import { C11Component } from './c11/c11.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'courses', component: C11Component },
  { path: 'course-details', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponenets = [C11Component, CourseDetailsComponent]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours.component';
import { RouterModule,Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'',
    component: CoursComponent
  }
]



@NgModule({
  declarations: [
    CoursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class CoursModule { }

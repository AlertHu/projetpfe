import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: FooterComponent
  }

]

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class FooterModule { }

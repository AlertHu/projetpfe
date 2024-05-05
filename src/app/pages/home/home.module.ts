import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';

import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ContactComponent } from 'src/app/sharedpage/contact/contact.component';





const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
   
  
  ],
  imports: [
  
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeModule { }

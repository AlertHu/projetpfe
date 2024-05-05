import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule,Routes } from '@angular/router';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatButtonModule}from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: SigninComponent
  }

]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
    

  ]})
  
export class SigninModule { }

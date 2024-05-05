// about.module.ts (ou le module contenant AboutComponent)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {  navbarComponent } from 'src/app/sharedpage/navbar/navbar.component'; // Assurez-vous que le chemin est correct
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    AboutComponent,
    // Assurez-vous que NavbarComponent est déclaré ici
  ],
  imports: [
    CommonModule,
  
  ]
})
export class AboutModule { }

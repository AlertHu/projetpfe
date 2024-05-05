import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Importez le module MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importez le module MatFormFieldModule
import { MatListModule } from '@angular/material/list';
import{MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BlankComponent } from './mocks/blank/blank.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatMenuModule}from '@angular/material/menu'
import {SigninComponent } from 'src/app/pages/signin/signin.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfilComponent } from './pages/profil/profil.component';
import{MatDividerModule} from '@angular/material/divider'
import { AboutComponent } from './sharedpage/about/about.component';
import { FooterComponent } from './sharedpage/footer/footer.component';
import { ContactComponent } from './sharedpage/contact/contact.component';

import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HeaderComponent } from './pages/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PagesComponent } from './pages/pages/pages.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { RecoverPasswordDialogComponent } from './recover-password-dialog/recover-password-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterSuccessMessageComponent } from './register-success-message/register-success-message.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';

import{provideFirestore, getFirestore} from '@angular/fire/firestore'
import { defaultenvironment } from 'src/environments/environment.development';
import { AttendanceComponent } from './admin/attendance/attendance.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { StudentComponent } from './admin/student/student.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { DashboardadmComponent } from './admin/dashboardadm/dashboardadm.component';
import { LSI1Component } from './admin/lsi1/lsi1.component';
import { LSI2Component } from './admin/lsi2/lsi2.component';
import { LSI3Component } from './admin/lsi3/lsi3.component';
import { OptionComponent } from './option/option.component';
import { RegisterenseignantComponent } from './registerenseignant/registerenseignant.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


@NgModule({
  declarations: [
    
    ProfilUtilisateurComponent,
    ProfilComponent,
    NavbarComponent,
    AboutComponent,
    RecoverPasswordDialogComponent,
    AppComponent,
    BlankComponent,    
    RegisterComponent,
    DashboardComponent,
    ProfilComponent, 
    FooterComponent,
   
    SidenavComponent,
    HeaderComponent,
    BodyComponent,
    SettingsComponent,
    PagesComponent,
    MainComponent,
    ProfilUtilisateurComponent,
    TestComponent,
    RecoverPasswordDialogComponent,
    RegisterSuccessMessageComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    AttendanceComponent,
    NotificationComponent,
    StudentComponent,
    TeacherComponent,
    CoursesComponent,
    DashboardadmComponent,
    LSI1Component,
    LSI2Component,
    LSI3Component,
    OptionComponent,
    RegisterenseignantComponent,
    ReclamationComponent
    
   
  ],
  imports: [
    MatCheckboxModule, 
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCeiJ-R2h7Xb0Sq_3V09a3WZmCiz-hB5Os",
      authDomain: "jareeb-ea48c.firebaseapp.com",
      projectId: "jareeb-ea48c",
      storageBucket: "jareeb-ea48c.appspot.com",
      messagingSenderId: "240495022067",
      appId: "1:240495022067:web:782e8ad23fc51d1edecc86"
    }),
    AngularFireModule,
  provideFirebaseApp(() => initializeApp(defaultenvironment.firebase)),
  provideFirestore(() =>getFirestore())
    
  ],
  providers: [],
  schemas: [
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

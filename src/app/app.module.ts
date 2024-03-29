import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {AngularFireModule} from '@angular/fire/compat';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAopTKemV14J9fvve86PHQBhGM6fz7rIsE",
      authDomain: "testing-9fcc2.firebaseapp.com",
      projectId: "testing-9fcc2",
      storageBucket: "testing-9fcc2.appspot.com",
      messagingSenderId: "345374265514",
      appId: "1:345374265514:web:bbfb4c04b7e3094faf00d3"
    }),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from 'src/app/pages/pages/pages.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { BodyComponent } from './body.component';

const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
  {path:'body', component: BodyComponent},
  { path: 'settings', component: SettingsComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }

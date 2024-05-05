import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { PagesComponent } from 'src/app/pages/pages/pages.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { BodyComponent } from 'src/app/pages/body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'profil', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent },
  {path:'body', component: BodyComponent},
  { path: 'settings', component: SettingsComponent },

  {
    path: 'profil',
    component: ProfilComponent
  }
];

@NgModule({
  declarations: [], // Ajoutez le composant ProfilComponent dans les déclarations
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule
  ]
})
export class ProfilModule  {

 }

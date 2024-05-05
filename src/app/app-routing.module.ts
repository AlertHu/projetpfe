import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './sharedpage/about/about.component';
import { ContactComponent } from './sharedpage/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { TestComponent } from './pages/test/test.component';
import { AttendanceComponent } from './admin/attendance/attendance.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { StudentComponent } from './admin/student/student.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { DashboardadmComponent } from './admin/dashboardadm/dashboardadm.component';
import { LSI1Component } from './admin/lsi1/lsi1.component';
import { LSI2Component } from './admin/lsi2/lsi2.component';
import { LSI3Component } from './admin/lsi3/lsi3.component';
import { OptionComponent } from './option/option.component';
import { RegisterenseignantComponent } from './registerenseignant/registerenseignant.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


const routes: Routes = [
{path:'settings',
  loadChildren:() => import('./pages/body/body.module')
  .then(m=> m.BodyModule)
},

{
  path:'',
  loadChildren:() => import('./pages/home/home.module')
  .then(m =>m.HomeModule)

},

{path:'ProfilUtilisateur' ,
  component:ProfilUtilisateurComponent
},
{
  path:'signin',
  loadChildren:() => import('./pages/signin/signin.module')
    .then(m =>m.SigninModule)
},

{
  path:'cours',
  loadChildren:() => import('./pages/cours/cours.module')
    .then(m => m.CoursModule)
},
{
  path: 'register',
  component: RegisterComponent
},

{
  path: 'about',
  component: AboutComponent
},
{
  path: 'home',
  component: HomeComponent
},

{
  path: 'option' , 
  component : OptionComponent
},
{
  path: 'enseignant' , 
  component : RegisterenseignantComponent

},



{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'profil',
  component: ProfilComponent
},

{ path: 'register', component: RegisterComponent }, // Route vers le composant d'inscription
// Route vers le composant de profil

{ path:'reclamation', component:ReclamationComponent},

{
  path: 'profile',
  component: ProfilUtilisateurComponent
},
{path:'test' , component: TestComponent},
{path:'admin/attendance', component:AttendanceComponent},
{path:'admin/courses', component:CoursesComponent},
{path:'admin/notification', component:NotificationComponent},
{path:'admin/student', component:StudentComponent},
{path:'admin/teacher', component:TeacherComponent},
{path:'admin/dashboardadm', component:DashboardadmComponent},
{path:'admin/student/lsi1', component:LSI1Component},
{path:'admin/student/lsi2', component:LSI2Component},
{path:'admin/student/lsi3', component:LSI3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

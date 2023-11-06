import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateSubjectComponent } from './pages/create-subject/create-subject.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';
import { ShowComponent } from './pages/show/show.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { CertifiedComponent } from './pages/certified/certified.component';
import { CreateCertifiedComponent } from './pages/create-certified/create-certified.component';
import { AdminCertifiedComponent } from './pages/admin-certified/admin-certified.component';
import { ShowCertifiedComponent } from './pages/show-certified/show-certified.component';
import { Error401Component } from './pages/error401/error401.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuard] },
  { path: 'show/:id', component: ShowComponent, canActivate: [AuthGuard] },
  {
    path: 'create',
    component: CreateSubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: EditSubjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'certifieds',
    component: CertifiedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-certified',
    component: CreateCertifiedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-certified',
    component: AdminCertifiedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'show-certified/:id',
    component: ShowCertifiedComponent,
    canActivate: [AuthGuard],
  },
  { path: 'error-401', component: Error401Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

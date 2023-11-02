import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditSubjectComponent } from './pages/edit-subject/edit-subject.component';
import { CreateSubjectComponent } from './pages/create-subject/create-subject.component';
import { ShowComponent } from './pages/show/show.component';
import { SubjectFormComponent } from './components/subject-form/subject-form.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/subject-table/subject-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { CertifiedComponent } from './pages/certified/certified.component';
import { CertifiedTableComponent } from './components/certified-table/certified-table.component';
import { CreateCertifiedComponent } from './pages/create-certified/create-certified.component';
import { CertifiedFormComponent } from './components/certified-form/certified-form.component';
import { AdminCertifiedComponent } from './pages/admin-certified/admin-certified.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ShowCertifiedComponent } from './pages/show-certified/show-certified.component';
import { Error401Component } from './pages/error401/error401.component';

@NgModule({
  declarations: [
    AppComponent,
    EditSubjectComponent,
    CreateSubjectComponent,
    ShowComponent,
    SubjectFormComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    LoginComponent,
    SignupComponent,
    CertifiedComponent,
    CertifiedFormComponent,
    CertifiedTableComponent,
    CreateCertifiedComponent,
    CertifiedFormComponent,
    AdminCertifiedComponent,
    AdminTableComponent,
    ShowCertifiedComponent,
    Error401Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

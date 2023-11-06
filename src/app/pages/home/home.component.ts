import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { User } from 'src/app/models/user.model';
import { CognitoService } from 'src/app/services/cognito.service';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  materias: Subject[] = [];
  usuario: User[] = [];
  userName: string;
  isAdmin: string;
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private CrudSubjectsService: CrudSubjectsService,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.isAdmin = sessionStorage.getItem('rol');
    this.cognitoService.getUser().then(() => {
      this.userName = sessionStorage.getItem('userName');
    });
    this.CrudSubjectsService.getMaterias().subscribe((materias: Subject[]) => {
      this.materias = materias;
      this.isLoading = false;
    });
  }

  // Método para manejar la redirección a /error-401 si no es administrador
  redirectToAuthorizations() {
    if (this.isAdmin !== 'admin' && this.isAdmin !== undefined) {
      // No es administrador, redirigir a /error-401
      this.router.navigate(['/error-401']);
    } else {
      // Es administrador, redirigir a la página de autorizaciones
      this.router.navigate(['/admin-certified']);
    }
  }
}

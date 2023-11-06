import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string;

  isAdmin: string;

  constructor(private router: Router, private cognitoService: CognitoService) {}

  ngOnInit(): void {
    this.isAdmin = sessionStorage.getItem('rol');
    this.cognitoService.getUser().then(() => {
      this.userName = sessionStorage.getItem('userName');
    });
  }

  signOut() {
    this.cognitoService.signOut().then(() => {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/']);
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

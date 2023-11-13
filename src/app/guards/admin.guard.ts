import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = sessionStorage.getItem('rol');

    if (isAdmin === 'admin') {
      return true; // Permitir el acceso a la ruta
    } else {
      this.router.navigate(['/error-401']);
      return false; // No permitir el acceso
    }
  }
}

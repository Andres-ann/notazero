import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private userId: string =
    localStorage.getItem(
      'CognitoIdentityServiceProvider.4d735puk5l41apnpl1951bdgit.LastAuthUser'
    ) || '';

  private API_CERTIFIED_URL: string = `${environment.api.API_CERTIFIED_URL}/api/users`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllCertificados(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.API_CERTIFIED_URL}`, {
      headers: this.httpHeaders,
    });
  }
}

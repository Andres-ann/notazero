import { Injectable } from '@angular/core';
import { Certified } from '../models/certified.model';
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
export class crudCertifiedsService {
  private userId: string =
    localStorage.getItem(
      'CognitoIdentityServiceProvider.4d735puk5l41apnpl1951bdgit.LastAuthUser'
    ) || '';
  private API_CERTIFIED_URL: string = `${environment.api.API_CERTIFIED_URL}/api/users`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getCertificados(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${this.API_CERTIFIED_URL}/certificates/${this.userId}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((res: any) => {
          return res.certificates || [];
        })
      );
  }

  getCertificado(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.API_CERTIFIED_URL}/certificates/${this.userId}/${id}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((res: any) => {
          return res || {};
        })
      );
  }

  createCertificado(data: Certified): Observable<any> {
    return this.httpClient
      .put(`${this.API_CERTIFIED_URL}/certificates/${this.userId}`, data, {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  updateCertificado(id: any, data: any): Observable<any> {
    return this.httpClient
      .put(
        `${this.API_CERTIFIED_URL}/certificates/${this.userId}/${id}`,
        data,
        {
          headers: this.httpHeaders,
        }
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`;
    }
    return throwError(() => {
      errorMsg;
    });
  }
}

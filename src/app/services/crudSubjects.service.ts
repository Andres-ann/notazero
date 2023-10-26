import { Injectable } from '@angular/core';
import { Subject } from '../models/subject.model';
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
export class CrudSubjectsService {
  private userId: string =
    localStorage.getItem(
      'CognitoIdentityServiceProvider.4d735puk5l41apnpl1951bdgit.LastAuthUser'
    ) || '';
  private API_SUBJECT_URL: string = `${environment.api.API_SUBJECT_URL}/api/${this.userId}/subjects`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getMaterias(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.API_SUBJECT_URL, { headers: this.httpHeaders })
      .pipe(
        map((res: any) => {
          return res.subjects || [];
        })
      );
  }

  getMateria(id: any): Observable<any> {
    return this.httpClient
      .get(`${this.API_SUBJECT_URL}/${id}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((res: any) => {
          return res || {};
        })
      );
  }

  createMateria(data: Subject): Observable<any> {
    return this.httpClient
      .put(this.API_SUBJECT_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  updateMateria(id: any, data: any): Observable<any> {
    return this.httpClient
      .put(`${this.API_SUBJECT_URL}/${id}`, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  deleteMateria(id: any): Observable<any> {
    return this.httpClient
      .delete(`${this.API_SUBJECT_URL}/${id}`, { headers: this.httpHeaders })
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

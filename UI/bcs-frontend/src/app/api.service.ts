import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { StandingResponse } from './StandingResponse';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
  export class ApiService {
      apiUrl = environment.baseUrl + '/Standings';
      constructor(private http: HttpClient) { }

      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      getStandings(): Observable<StandingResponse[]> {
          console.log('j');
        return this.http.get<StandingResponse[]>(this.apiUrl, this.httpOptions)
        .pipe(
        retry(1),
        catchError(this.handleError));
        }

   handleError(error) {
       let errorMessage = '';
       if (error.error instanceof ErrorEvent) {
         // Get client-side error
         errorMessage = error.error.message;
       } else {
         // Get server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       window.alert(errorMessage);
       return throwError(errorMessage);
    }
}

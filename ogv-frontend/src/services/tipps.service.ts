import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tipps } from 'src/app/_interfaces/tipps';

@Injectable({
  providedIn: 'root'
})
export class TippsService {
  userFrontend: Tipps[];
  BASE_URL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getTipps(): Observable<Tipps[]>{
    return this.httpClient.get<Tipps[]>(`${this.BASE_URL}/tipps`);
  }

  getTipp(idTipp: number): Observable<Tipps>{
    return this.httpClient.get<Tipps>(`${this.BASE_URL}/tipps/${idTipp}`);
  }

  createTipp(tipp: Tipps): Observable<Tipps>{
    return this.httpClient.post<Tipps>(`${this.BASE_URL}/tipps/create`, tipp);
  }

  deleteTipp(idTipp: number): Observable<Tipps>{
    return this.httpClient.delete<Tipps>(`${this.BASE_URL}/tipps/delete/${idTipp}`).pipe(catchError(this.handleError));
  }

  updateTipp(idTipp: number, tipp: Tipps): Observable<Tipps>{
    return this.httpClient.put<Tipps>(`${this.BASE_URL}/tipps/update/${idTipp}`, tipp);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.error('An error occured:', error.error.message);
    } else {
        console.log(`Backend returned code ${error.status}, body was: ${error.status}`);    
    }
  return  throwError(`Something bad happened; please try again later.`);  
}
}

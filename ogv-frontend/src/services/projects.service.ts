import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Projekt } from 'src/app/_interfaces/projekt';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  userFrontend: Projekt[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getProjekts(): Observable<Projekt[]>{
    return this.httpClient.get<Projekt[]>(`${this.BASE_URL}/projects`);
  }

  getProjektsOfYear(yearA: number): Observable<Projekt[]>{
    return this.httpClient.get<Projekt[]>(`${this.BASE_URL}/projects/years=${yearA}`);
  }


  getProjekt(idProjekt: number): Observable<Projekt>{
    return this.httpClient.get<Projekt>(`${this.BASE_URL}/projects/${idProjekt}`);
  }

  createProjekt(projekt: Projekt): Observable<Projekt>{
    return this.httpClient.post<Projekt>(`${this.BASE_URL}/projects/create`, projekt);
  }

  deleteProjekt(idProjekt: number): Observable<Projekt>{
    return this.httpClient.delete<Projekt>(`${this.BASE_URL}/projects/delete/${idProjekt}`).pipe(catchError(this.handleError));
  }

  updateProjekt(idProjekt: number, projekt: Projekt): Observable<Projekt>{
    return this.httpClient.put<Projekt>(`${this.BASE_URL}/projects/update?projektID=${idProjekt}`, projekt);
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Card } from 'src/app/_interfaces/card';
import {Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsFrontend: Card[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${this.BASE_URL}/cards`);
  }

  getCard(idCard: number): Observable<Card>{
    return this.httpClient.get<Card>(`${this.BASE_URL}/cards/${idCard}`);
  }

  createCard(card: Card): Observable<Card>{
    return this.httpClient.post<Card>(`${this.BASE_URL}/cards/create`, card);
  }

  public deleteCard(idCard: number){
    return this.httpClient.delete<Card>(`${this.BASE_URL}/cards/delete/${idCard}`).pipe(catchError(this.handleError));
  }

  updateCard(idCard: number, card: Card): Observable<Card>{
    return this.httpClient.put<Card>(`${this.BASE_URL}/cards/update/${idCard}`, card);
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

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gallery } from 'src/app/_interfaces/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  userFrontend: Gallery[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getGallerys(): Observable<Gallery[]>{
    return this.httpClient.get<Gallery[]>(`${this.BASE_URL}/gallery`);
  }

  getGallerysOfYears(yearIn: number): Observable<Gallery[]>{
    const year = String(yearIn);
    return this.httpClient.get<Gallery[]>(`${this.BASE_URL}/gallery/${year}`);
  }


  getGallery(idGallery: number): Observable<Gallery>{
    return this.httpClient.get<Gallery>(`${this.BASE_URL}/gallery?id=${idGallery}`);
  }

  createGallery(gallery: Gallery): Observable<Gallery>{
    return this.httpClient.post<Gallery>(`${this.BASE_URL}/gallery/create`, gallery);
  }

  deleteGallery(idGallery: number): Observable<Gallery>{
    return this.httpClient.delete<Gallery>(`${this.BASE_URL}/gallery/delete/${idGallery}`).pipe(catchError(this.handleError));
  }

  updateGallery(idGallery: number, gallery: Gallery): Observable<Gallery>{
    return this.httpClient.put<Gallery>(`${this.BASE_URL}/gallery/update?idGallery=${idGallery}`, gallery);
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

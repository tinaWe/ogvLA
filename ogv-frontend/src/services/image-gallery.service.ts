import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Galleryimages } from 'src/app/_interfaces/imageGallery';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {
  userFrontend: Galleryimages[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getImagesGallery(): Observable<Galleryimages[]>{
    return this.httpClient.get<Galleryimages[]>(`${this.BASE_URL}/galleryimages`);
  }

  getImagesOfYear(galleryId: number): Observable<Galleryimages[]>{
    return this.httpClient.get<Galleryimages[]>(`${this.BASE_URL}/galleryimages/by/${galleryId}`);
  }


  getImageGallery(imageId: number): Observable<Galleryimages>{
    return this.httpClient.get<Galleryimages>(`${this.BASE_URL}/galleryimages/${imageId}`).pipe(catchError(this.handleError));
  }

  createImageForGallery(image: Galleryimages): Observable<Galleryimages>{
    return this.httpClient.post<Galleryimages>(`${this.BASE_URL}/galleryimages/create`, image);
  }

  deleteImageForGallery(galleryId: number): Observable<Galleryimages>{
    return this.httpClient.delete<Galleryimages>(`${this.BASE_URL}/galleryimages/delete?galleryId=${galleryId}`);
  }

  updateImageForGallery(galleryId: number, image: Galleryimages): Observable<Galleryimages>{
    return this.httpClient.put<Galleryimages>(`${this.BASE_URL}/galleryimages/update?galleryId=${galleryId}`, image);
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

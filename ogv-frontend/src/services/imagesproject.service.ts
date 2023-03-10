import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageProjekt } from 'src/app/_interfaces/imageProjekt';

@Injectable({
  providedIn: 'root'
})
export class ImagesprojectService {

  userFrontend: ImageProjekt[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<ImageProjekt[]>{
    return this.httpClient.get<ImageProjekt[]>(`${this.BASE_URL}/imagesprojects`);
  }

  getImagesOfProject(projectId: number): Observable<ImageProjekt[]>{
    return this.httpClient.get<ImageProjekt[]>(`${this.BASE_URL}/imagesprojects/by/${projectId}`);
  }


  getImage(projectId: number): Observable<ImageProjekt>{
    return this.httpClient.get<ImageProjekt>(`${this.BASE_URL}/imagesprojects/${projectId}`);
  }

  createImage(image: ImageProjekt): Observable<ImageProjekt>{
    return this.httpClient.post<ImageProjekt>(`${this.BASE_URL}/imagesprojects/create`, image);
  }

  deleteImage(projectId: number): Observable<ImageProjekt>{
    return this.httpClient.delete<ImageProjekt>(`${this.BASE_URL}/imagesprojects/delete?projektID=${projectId}`);
  }

  updateImage(projectId: number, image: ImageProjekt): Observable<ImageProjekt>{
    return this.httpClient.put<ImageProjekt>(`${this.BASE_URL}/imageProjects/update?projektID=${projectId}`, image);
  }
}
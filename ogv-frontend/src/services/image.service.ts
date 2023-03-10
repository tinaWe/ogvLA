import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { images } from '../assets/dataGallery/image.data';

@Injectable(
 { providedIn: 'root'
})
export class ImageService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchImages(): Observable<any> {
    return of(images);
  }
}

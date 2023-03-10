import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedProjectGalService {

  constructor() { }

  private subject = new Subject<any>();
sendLoadEvent() {
  this.subject.next();
}
getLoadEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
}

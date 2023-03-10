// import { Pipe, PipeTransform } from '@angular/core';
// // import { Observable } from 'rxjs';
// // import { Http, RequestOptions, Headers, ResponseContentType } from @angular/http';
// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // import {map, switchMap} from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';
// import { HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
// // import { Observable } from 'rxjs/internal/Observable';

// @Pipe({name: 'image'})
// export class ImagePipe implements PipeTransform {
//   constructor(private http: HttpClient) {}

//   transform(url: string) {
//   const headers = new HttpHeaders({'Authorization': 'MY TOKEN', 'Content-Type': 'image/*'}); /* tell that XHR is going to receive an image as response, so it can be then converted to blob, and also provide your token in a way that your server expects */
//   return this.http.get(url, {headers, responseType: 'blob' as 'json'}) // specify that response should be treated as blob data
// //   .pipe(
// //     switchMap((response) => {response.blob()}
// //   // return new observable which emits a base64 string when blob is converted to base64
// //       return Observable.create(observer => { 
// //         const  reader = new FileReader(); 
// //         reader.readAsDataURL(blob); // convert blob to base64
// //         reader.onloadend = function() {             
// //               observer.next(reader.result); // emit the base64 string result
// //         }
// //      })}))
//    }

// //    transformOriginal(url: string) {
// //     const headers = new Headers({'Authorization': 'MY TOKEN', 'Content-Type': 'image/*'}); /* tell that XHR is going to receive an image as response, so it can be then converted to blob, and also provide your token in a way that your server expects */
// //     return this.http.get(url, new RequestOptions({headers: headers, responseType: ResponseContentType.Blob})) // specify that response should be treated as blob data
// //     .map(response => response.blob()) // take the blob
// //     .switchMap(blob => {
// //     // return new observable which emits a base64 string when blob is converted to base64
// //         return Observable.create(observer => { 
// //           const  reader = new FileReader(); 
// //           reader.readAsDataURL(blob); // convert blob to base64
// //           reader.onloadend = function() {             
// //                 observer.next(reader.result); // emit the base64 string result
// //           }
// //        });
// //      });
// }

// // .pipe(
// //     switchMap(blob => {
// //   // return new observable which emits a base64 string when blob is converted to base64
// //       return Observable.create(observer => { 
// //         const  reader = new FileReader(); 
// //         reader.readAsDataURL(blob); // convert blob to base64
// //         reader.onloadend = function() {             
// //               observer.next(reader.result); // emit the base64 string result
// //         }
// //      })}))
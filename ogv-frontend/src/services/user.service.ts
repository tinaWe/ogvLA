import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userFrontend: User[];
  BASE_URL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAccounts(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.BASE_URL}/users`);
  }

  public login(data: any){
    return this.httpClient.post<User>(`${this.BASE_URL}/users/login`, data, {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/internerBereich']));
  }

  public getAccount(idUser: number): Observable<User>{
    return this.httpClient.get<User>(`${this.BASE_URL}/users/${idUser}`);
  }

  // public createAccount(account: User){
  //   return this.httpClient.post<User>(`${this.BASE_URL}/users/create`, account);
  // }

  public createAccount(account: User){
    return this.httpClient.post<User>(`${this.BASE_URL}/users/register`, account);
  }

  public loginAccount(data: any){
    console.log("sevice");
    return this.httpClient.post<User>(`${this.BASE_URL}/users/login`, data, {withCredentials: true}).subscribe(() => this.router.navigate(['/internerBereich']));
    /*{withCredentials: true}*/
  }

  public deleteAccount(idUser: number){
    return this.httpClient.delete<User>(`${this.BASE_URL}/users/delete/${idUser}`);
  }

  public updateAccount(idUser: number, account: User){
    return this.httpClient.put<User>(`${this.BASE_URL}/users/update/${idUser}`, account);
  } 
}

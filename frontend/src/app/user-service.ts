import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.userUrl = 'http://localhost:8080/user/';
   }

   public findAll(): Observable<User[]> {
     return this.http.get<User[]>(this.usersUrl);
   }

   public findUser(id: number): Observable<User> {
     return this.http.get<User>(this.userUrl + id);
   } 

   public save(user: User) {
     return this.http.post<User>(this.usersUrl, user);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../ativos/ativos/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "/all"
    return this.http.get<any[]>(this.baseUrl);
  }

  getUserByUsername(username: string): Observable<Users> {
    const url = `${this.baseUrl}/findbylogin?login=${username}`; // Passando o parâmetro na query string
    console.log(url);
    return this.http.get<any>(url);
  }

  login(usuario: Users): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { usuario };
    return this.http.post<any>(url, body);
  }

  register(user: Users): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<any>(url, user);
  }
}

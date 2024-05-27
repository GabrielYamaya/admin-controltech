import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../ativos/ativos/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "https://controltech-backend.azurewebsites.net/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const url = this.baseUrl + "/all"
    return this.http.get<any[]>(url);
  }

  getUserByUsername(login: string): Observable<Users> {
    const url = `${this.baseUrl}/findbylogin?login=${login}`; // Passando o parâmetro na query string corretamente
    console.log(url);
    return this.http.get<Users>(url);
  }

  login(usuario: Users): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = { usuario };
    return this.http.post<any>(url, body);
  }

  register(user: Users): Observable<any> {
    const url = `${this.baseUrl}/cadastro`;
    return this.http.post<any>(url, user);
  }
}

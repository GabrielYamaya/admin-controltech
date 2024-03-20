import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../ativos/ativos/model/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {
  private baseUrl: string = "http://localhost:8080/categoria";

  constructor(private http: HttpClient) { }
  getCategorias(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "/all"
    return this.http.get<any[]>(this.baseUrl);
  }
}

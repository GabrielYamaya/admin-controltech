import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ativos } from '../ativos/ativos/model/ativos';
@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  private baseUrl: string = "http://localhost:8080/ativos";

  constructor(private http: HttpClient) { }
  getAtivos(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "/all"
    return this.http.get<any[]>(this.baseUrl);
  }

  saveAtivoFisico(formData: any): Observable<any> {
    this.baseUrl = this.baseUrl + "/save"
    return this.http.post<any>(this.baseUrl, formData);
  }
}

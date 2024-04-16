import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ativos } from '../ativos/ativos/model/ativos';
import { AtivoMiddle } from '../ativos/ativos/model/ativoMiddle';
@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  private baseUrl: string = "http://localhost:8080/";
  private urlSendFisico: string = "http://localhost:8080/ativofisico/cadastrarTeste";
  private urlativos: string = "http://localhost:8080/ativos/cadastrar"

  constructor(private http: HttpClient) { }
  
  getAtivos(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "ativos/all"
    return this.http.get<any[]>(this.baseUrl);
  }

  saveAtivoFisico(formData: AtivoMiddle): Observable<AtivoMiddle> {

    console.log(formData)
    return this.http.post<any>(this.urlSendFisico, formData);
  }
  saveSoftware(formData: AtivoMiddle): Observable<AtivoMiddle> {

    return this.http.post<any>(this.baseUrl,formData)
  }

  saveAtivos(formdata: Ativos): Observable<Ativos>{

    return this.http.post<Ativos>(this.urlativos,formdata)
  }
}

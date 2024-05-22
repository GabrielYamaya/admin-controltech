import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ativos } from '../ativos/ativos/model/ativos';
import { AtivoMiddle } from '../ativos/ativos/model/ativoMiddle';
import { Licenca } from '../ativos/ativos/model/licenca';
import { Software } from '../ativos/ativos/model/software';
@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  private baseUrl: string = "http://localhost:8080/";
  private urlSendFisico: string = "http://localhost:8080/ativofisico/cadastrarTeste";
  private urlativos: string = "http://localhost:8080/ativos/cadastrar"

  private urlSendSoftware: string = "http://localhost:8080/software/cadastrarTeste"
  constructor(private http: HttpClient) { }
  
  getAtivos(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "ativos/all"
    console.log(this.baseUrl);
    return this.http.get<any[]>(this.baseUrl);
  }

  saveAtivoFisico(formData: AtivoMiddle): Observable<AtivoMiddle> {

    console.log(formData)
    return this.http.post<any>(this.urlSendFisico, formData);
  }
  saveSoftware(formData: AtivoMiddle): Observable<AtivoMiddle> {

    return this.http.post<any>(this.urlSendSoftware,formData)
  }

  saveAtivos(formdata: Ativos): Observable<Ativos>{

    return this.http.post<Ativos>(this.urlativos,formdata)
  }
  getSoftwareLicenses(software: number): Observable<Licenca[]> {
    const url = `${this.baseUrl}software/licenses/${software}`;
    return this.http.get<Licenca[]>(url);
  }
  getSoftwareByAtivoName(ativoName: string): Observable<Software> {
    const url = `${this.baseUrl}software/by-ativo-name/${ativoName}`;
    return this.http.get<Software>(url);
  }
  searchSoftwareByName(value: string): Observable<Software[]> {
    const url = `${this.baseUrl}software/by-ativo-name/${value}`;
    return this.http.get<Software[]>(url);
  }
}

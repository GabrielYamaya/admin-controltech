import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  private baseUrl: string = "https://controltech-backend.azurewebsites.net/";
  constructor(private http: HttpClient) { }

  getLocais(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "local/all"
    console.log(this.baseUrl);
    return this.http.get<any[]>(this.baseUrl);
  }
}

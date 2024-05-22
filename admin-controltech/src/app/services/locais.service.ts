import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {
  private baseUrl: string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  getLocais(): Observable<any[]> {
    this.baseUrl = this.baseUrl + "local/all"
    console.log(this.baseUrl);
    return this.http.get<any[]>(this.baseUrl);
  }
}

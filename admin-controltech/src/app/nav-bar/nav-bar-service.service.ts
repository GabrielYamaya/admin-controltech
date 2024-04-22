import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarServiceService {
  private _isNavBarActive: boolean = false;

  get isNavBarActive() {
    return this._isNavBarActive;
  }

  set isNavBarActive(value: boolean) {
    this._isNavBarActive = value;
    this.isNavBarActiveSubject.next(value);  // Adicione esta linha
  }
  
  private isNavBarActiveSubject = new BehaviorSubject<boolean>(false);
  isNavBarActive$ = this.isNavBarActiveSubject.asObservable();

  //Lógica abrir e fechar

  private isNavOpenSubject = new BehaviorSubject<boolean>(false);
  isNavOpen$ = this.isNavOpenSubject.asObservable();


  toggleNav() {
    this.isNavOpenSubject.next(!this.isNavOpenSubject.value);
  }

  constructor() { }
}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarServiceService {
  isNavBarActive: boolean = false;
  private isNavOpenSubject = new BehaviorSubject<boolean>(false);
  isNavOpen$ = this.isNavOpenSubject.asObservable();

  private isNavBarActiveSubject = new BehaviorSubject<boolean>(false);
  isNavBarActive$ = this.isNavBarActiveSubject.asObservable();
  toggleNav() {
    this.isNavOpenSubject.next(!this.isNavOpenSubject.value);
  }
  constructor() { }
}

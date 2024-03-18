import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarServiceService {
  private isNavOpenSubject = new BehaviorSubject<boolean>(false);
  isNavOpen$ = this.isNavOpenSubject.asObservable();

  toggleNav() {
    this.isNavOpenSubject.next(!this.isNavOpenSubject.value);
  }
  constructor() { }
}

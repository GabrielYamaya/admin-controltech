import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavBarServiceService } from '../nav-bar/nav-bar-service.service';

@Injectable({
  providedIn: 'root'
})
export class DisableNavBarGuard implements CanLoad {

  constructor(private navBarService: NavBarServiceService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    // Desativa a NavBar na rota /login
    const url = segments.map(s => s.path).join('/');
    if (url === 'login' || url === 'login/cadastrar') {
      this.navBarService.isNavBarActive = false;
    } else {
      this.navBarService.isNavBarActive = true;
    }
    return true;
  }
}
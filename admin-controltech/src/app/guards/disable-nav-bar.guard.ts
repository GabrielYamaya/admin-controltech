import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavBarServiceService } from '../nav-bar/nav-bar-service.service';

@Injectable({
  providedIn: 'root'
})
export class DisableNavBarGuard implements CanActivate {

  constructor(private navBarService: NavBarServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Desativa a NavBar na rota /login
    if (state.url === '/login') {
      this.navBarService.isNavBarActive = false;
    } else {
      this.navBarService.isNavBarActive = true;
    }
    return true;
  }
}
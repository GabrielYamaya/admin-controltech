import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavBarServiceService } from '../nav-bar/nav-bar-service.service';

@Injectable({
  providedIn: 'root'
})
export class DisableNavBarGuard implements CanActivate {
  constructor(private navBarService: NavBarServiceService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    if (url === '/login' || url === '/login/cadastrar') {
      this.navBarService.isNavBarActive = false;
    } else {
      this.navBarService.isNavBarActive = true;
    }
    return true;
  }
} 
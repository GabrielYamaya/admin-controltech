import { Component } from '@angular/core';
import { NavBarServiceService } from './nav-bar/nav-bar-service.service'; // Correção no caminho de importação

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Correção na declaração de estilo
})
export class AppComponent {
  title = 'admin-controltech';
  isNavOpen: boolean = false;
  isNavBarActive: boolean = false;

  constructor(private navBarService: NavBarServiceService) {
    this.navBarService.isNavOpen$.subscribe(isOpen => {
      this.isNavOpen = isOpen;
    });    
    this.navBarService.isNavBarActive$.subscribe(isActive => {
      this.isNavBarActive = isActive;
    });
  }
}
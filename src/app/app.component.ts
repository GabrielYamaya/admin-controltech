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

  constructor(private navBarService: NavBarServiceService) {
    this.navBarService.isNavOpen$.subscribe(isOpen => {
      this.isNavOpen = isOpen;
    });    
  }
  get isNavBarActive(){
    return this.navBarService.isNavBarActive;
  }
}
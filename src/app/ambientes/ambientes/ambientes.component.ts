import { Component , OnInit } from '@angular/core';
import { NavBarServiceService } from '../../nav-bar/nav-bar-service.service';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrl: './ambientes.component.scss'
})
export class AmbientesComponent implements OnInit {
  isNavOpen: boolean = false;

  constructor(private navBarServiceSerivce: NavBarServiceService){
    this.navBarServiceSerivce.isNavOpen$.subscribe(isOpen =>{
      this.isNavOpen = isOpen;
    })
    console.log("Hello!");
  }
  ngOnInit(): void {
    console.log("Hello!");
  }
}

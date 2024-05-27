import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavBarServiceService } from './nav-bar-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit, OnDestroy {
  isNavOpen: boolean = false;
  isActivated: boolean = false;
  isNavBarActive: boolean | undefined;
  private subscription!: Subscription;

  constructor(private navBarService: NavBarServiceService) {}

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.navBarService.toggleNav();
    this.isActivated = !this.isActivated;
  }

  ngOnInit() {
    this.subscription = this.navBarService.isNavBarActive$.subscribe(
      isActive => this.isNavBarActive = isActive
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
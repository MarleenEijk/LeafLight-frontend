import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.currentRoute = this.router.url;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = (event as NavigationEnd).url;
    });
  }

  onLogoutClick(): void {
    this.router.navigate(['/login']);
  }

  isLoginOrCreateAccountPage(): boolean {
    return this.currentRoute === '/login' || this.currentRoute === '/create-account';
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSignUpClick(): void {
    this.router.navigate(['/create-account']);
  }

  onLoginClick(): void {
    this.router.navigate(['/plants']);
  }
}

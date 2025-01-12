import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = ''; 
  errorMessage: string = '';
  passwordFieldType: string = 'password';
  
  constructor(private router: Router, private userService: UserService) {}

  onSignUpClick(): void {
    this.router.navigate(['/create-account']);
  }

  onLoginClick(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.userService.login(this.email, this.password).subscribe({
      next: (user: User) => {
        console.log('Login successful', user);
        this.router.navigate(['/plants']);
      },
      error: (err: any) => {
        console.log('Login failed', err);
        this.errorMessage = 'Invalid email or password. Please try again.';
      },
    });
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
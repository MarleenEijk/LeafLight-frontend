import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'createaccount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  user: User = {
    id: 0,
    name: '',
    emailaddress: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    if (!this.user.name || !this.user.emailaddress || !this.user.password) {
      this.snackBar.open('All fields are required.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('Account created successfully:', response);
        this.snackBar.open('Account created! Redirecting to login page.', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error creating account:', error);
        this.snackBar.open('Failed to create account. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      }
    );
  }

  onLoginClick(): void {
    this.router.navigate(['/login']);
  }
}

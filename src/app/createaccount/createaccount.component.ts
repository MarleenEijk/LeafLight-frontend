import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'createaccount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
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
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.user.name || !this.user.emailaddress || !this.user.password) {
      Swal.fire({
        title: 'Error',
        text: 'All fields are required.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          container: 'swal-custom-font'
        }
      });
      return;
    }

    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log('Account created successfully:', response);

        Swal.fire({
          title: 'Success!',
          text: 'Account created successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            container: 'swal-custom-font'
          }
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      (error) => {
        console.error('Error creating account:', error);

        Swal.fire({
          title: 'Error!',
          text: 'Failed to create account. Please try again.',
          icon: 'error',
          confirmButtonText: 'Close',
          customClass: {
            container: 'swal-custom-font'
          }
        });
      }
    );
  }

  onLoginClick(): void {
    this.router.navigate(['/login']);
  }
}

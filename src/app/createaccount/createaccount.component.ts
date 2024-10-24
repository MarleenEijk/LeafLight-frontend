import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'createaccount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  @Output() navigateToLogin = new EventEmitter<void>();

  onLoginClick() {
    this.navigateToLogin.emit();
  }

    user: User = {
      id: 0,
      name: '',
      email: '',
      password: ''
    }

    onSubmit() : void{
      
    }
}

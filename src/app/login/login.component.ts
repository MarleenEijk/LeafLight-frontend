import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() navigateToCreateAccount = new EventEmitter<void>();

  onSignUpClick() {
    this.navigateToCreateAccount.emit();
  }
}

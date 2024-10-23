import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from "./login/login.component";
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PlantlibraryComponent } from './plantlibrary/plantlibrary.component';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, CreateaccountComponent, PlantlibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LeafLight-frontend';
}

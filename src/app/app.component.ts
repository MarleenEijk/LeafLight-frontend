import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from "./login/login.component";
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PlantLibraryComponent } from './plantlibrary/plantlibrary.component';
import { CommonModule } from '@angular/common';
import { PlantinfoComponent } from "./plantinfo/plantinfo.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    LoginComponent, 
    CreateaccountComponent, 
    PlantLibraryComponent, 
    PlantinfoComponent,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LeafLight-frontend';
}

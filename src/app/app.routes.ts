import { Routes } from '@angular/router';
import { PlantLibraryComponent } from './plantlibrary/plantlibrary.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateaccountComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'plants', component: PlantLibraryComponent },
  { path: 'plant/:id', component: PlantinfoComponent },
];
import { Routes } from '@angular/router';
import { PlantLibraryComponent } from './plantlibrary/plantlibrary.component';
import { PlantinfoComponent } from './plantinfo/plantinfo.component';

export const routes: Routes = [
  { path: '', component: PlantLibraryComponent },
  { path: 'plant/:id', component: PlantinfoComponent },
];
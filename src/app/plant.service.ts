import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiUrl = `${environment.apiUrl}/plants`;

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]>{
    return this.http.get<Plant[]>(this.apiUrl);
  }
}

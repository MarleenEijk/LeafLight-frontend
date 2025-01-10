import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'plantlibrary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './plantlibrary.component.html',
  styleUrls: ['./plantlibrary.component.css']
})
export class PlantLibraryComponent implements OnInit {
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];
  searchQuery: string = '';

  constructor(private plantService: PlantService, private router: Router) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantService.getPlants().subscribe(
      (data: Plant[]) => {
        this.plants = data;
        this.filteredPlants = data;
      },
      (error) => {
        console.error('Error fetching plants:', error);
      }
    );
  }

  filterPlants(): void {
    this.filteredPlants = this.plants.filter(plant =>
      plant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewPlantDetails(id: number): void {
    this.router.navigate(['/plant', id]);
  }
}
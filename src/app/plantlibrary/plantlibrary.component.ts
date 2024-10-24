import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'plantlibrary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantlibrary.component.html',
  styleUrl: './plantlibrary.component.css'
})
export class PlantLibraryComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    this.plantService.getPlants().subscribe(
      (data: Plant[]) => {
        this.plants = data;
      },
      (error) => {
        console.error('Error fetching plants:', error);
      }
    );
  }
}
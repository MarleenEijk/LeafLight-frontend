import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant';
import { PlantService } from '../plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'plantinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantinfo.component.html',
  styleUrls: ['./plantinfo.component.css']
})
export class PlantinfoComponent implements OnInit {
  plant: Plant | undefined;

  constructor(private plantService: PlantService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const plantId = Number(this.route.snapshot.paramMap.get('id'));
    this.plantService.getPlantById(plantId).subscribe((data: Plant) => {
      this.plant = data;
    });
  }

  returnToLibrary(): void {
    this.router.navigate(['/']);
  }
}
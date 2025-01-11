import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLibraryComponent } from './plantlibrary.component';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { Plant } from '../../models/plant';

describe('PlantLibraryComponent', () => {
  let component: PlantLibraryComponent;
  let fixture: ComponentFixture<PlantLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantLibraryComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('PlantLibraryComponent', () => {
  let component: PlantLibraryComponent;
  let fixture: ComponentFixture<PlantLibraryComponent>;
  let plantService: jasmine.SpyObj<PlantService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const plantServiceSpy = jasmine.createSpyObj('PlantService', ['getPlants']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PlantLibraryComponent, FormsModule],
      providers: [
        { provide: PlantService, useValue: plantServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantLibraryComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load plants on init', () => {
    const mockPlants: Plant[] = [
      {
        id: 1, name: 'plant1',
        description: 'description1',
        location: 'shade',
        water: 'weekly',
        repotting: 'half-yearly',
        toxic: 'yes',
        image: 'calathea.png'
      },
      {
        id: 2, name: 'plant2',
        description: 'description2',
        location: 'indirect sunlight',
        water: 'once every week',
        repotting: '2 times a year',
        toxic: 'no',
        image: 'calathea.png'
      }
    ];
    plantService.getPlants.and.returnValue(of(mockPlants));

    component.ngOnInit();

    expect(component.plants).toEqual(mockPlants);
    expect(component.filteredPlants).toEqual(mockPlants);
  });

  it('should handle error when loading plants', () => {
    const error = new Error('Error fetching plants');
    spyOn(console, 'error');
    plantService.getPlants.and.returnValue(throwError(error));

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error fetching plants:', error);
  });
});
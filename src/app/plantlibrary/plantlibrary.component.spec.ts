import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLibraryComponent } from './plantlibrary.component';
import { FormsModule } from '@angular/forms';

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
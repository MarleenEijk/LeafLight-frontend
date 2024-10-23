import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantlibraryComponent } from './plantlibrary.component';

describe('PlantlibraryComponent', () => {
  let component: PlantlibraryComponent;
  let fixture: ComponentFixture<PlantlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantlibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

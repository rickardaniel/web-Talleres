import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneadorDetalleComponent } from './planeador-detalle.component';

describe('PlaneadorDetalleComponent', () => {
  let component: PlaneadorDetalleComponent;
  let fixture: ComponentFixture<PlaneadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneadorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneadorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadMantenimientoComponent } from './prioridad-mantenimiento.component';

describe('PrioridadMantenimientoComponent', () => {
  let component: PrioridadMantenimientoComponent;
  let fixture: ComponentFixture<PrioridadMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioridadMantenimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

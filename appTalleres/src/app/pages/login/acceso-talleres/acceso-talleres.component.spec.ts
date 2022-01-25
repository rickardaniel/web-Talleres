import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoTalleresComponent } from './acceso-talleres.component';

describe('AccesoTalleresComponent', () => {
  let component: AccesoTalleresComponent;
  let fixture: ComponentFixture<AccesoTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoTalleresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarOrdenComponent } from './cerrar-orden.component';

describe('CerrarOrdenComponent', () => {
  let component: CerrarOrdenComponent;
  let fixture: ComponentFixture<CerrarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

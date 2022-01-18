import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlaneadorComponent } from './ver-planeador.component';

describe('VerPlaneadorComponent', () => {
  let component: VerPlaneadorComponent;
  let fixture: ComponentFixture<VerPlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPlaneadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

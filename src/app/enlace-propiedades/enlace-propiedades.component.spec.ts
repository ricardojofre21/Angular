import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacePropiedadesComponent } from './enlace-propiedades.component';

describe('EnlacePropiedadesComponent', () => {
  let component: EnlacePropiedadesComponent;
  let fixture: ComponentFixture<EnlacePropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacePropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlacePropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

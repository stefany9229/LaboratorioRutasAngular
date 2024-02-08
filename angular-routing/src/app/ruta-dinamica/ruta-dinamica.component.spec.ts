import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDinamicaComponent } from './ruta-dinamica.component';

describe('RutaDinamicaComponent', () => {
  let component: RutaDinamicaComponent;
  let fixture: ComponentFixture<RutaDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDinamicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

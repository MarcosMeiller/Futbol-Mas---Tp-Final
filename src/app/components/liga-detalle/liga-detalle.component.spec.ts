import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaDetalleComponent } from './liga-detalle.component';

describe('LigaDetalleComponent', () => {
  let component: LigaDetalleComponent;
  let fixture: ComponentFixture<LigaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LigaDetalleComponent]
    });
    fixture = TestBed.createComponent(LigaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

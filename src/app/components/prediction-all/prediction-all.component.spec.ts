import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionAllComponent } from './prediction-all.component';

describe('PredictionAllComponent', () => {
  let component: PredictionAllComponent;
  let fixture: ComponentFixture<PredictionAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredictionAllComponent]
    });
    fixture = TestBed.createComponent(PredictionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

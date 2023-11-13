import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwayEventComponent } from './away-event.component';

describe('AwayEventComponent', () => {
  let component: AwayEventComponent;
  let fixture: ComponentFixture<AwayEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwayEventComponent]
    });
    fixture = TestBed.createComponent(AwayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

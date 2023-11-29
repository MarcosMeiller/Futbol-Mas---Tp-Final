import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStaticsComponent } from './match-statics.component';

describe('MatchStaticsComponent', () => {
  let component: MatchStaticsComponent;
  let fixture: ComponentFixture<MatchStaticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchStaticsComponent]
    });
    fixture = TestBed.createComponent(MatchStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

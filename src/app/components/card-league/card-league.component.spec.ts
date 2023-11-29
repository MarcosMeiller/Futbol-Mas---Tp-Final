import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeagueComponent } from './card-league.component';

describe('CardLeagueComponent', () => {
  let component: CardLeagueComponent;
  let fixture: ComponentFixture<CardLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLeagueComponent]
    });
    fixture = TestBed.createComponent(CardLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

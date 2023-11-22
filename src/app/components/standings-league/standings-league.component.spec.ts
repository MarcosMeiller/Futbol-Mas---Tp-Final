import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsLeagueComponent } from './standings-league.component';

describe('StandingsLeagueComponent', () => {
  let component: StandingsLeagueComponent;
  let fixture: ComponentFixture<StandingsLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsLeagueComponent]
    });
    fixture = TestBed.createComponent(StandingsLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

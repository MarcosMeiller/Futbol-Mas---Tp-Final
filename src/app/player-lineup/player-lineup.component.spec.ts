import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLineupComponent } from './player-lineup.component';

describe('PlayerLineupComponent', () => {
  let component: PlayerLineupComponent;
  let fixture: ComponentFixture<PlayerLineupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerLineupComponent]
    });
    fixture = TestBed.createComponent(PlayerLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

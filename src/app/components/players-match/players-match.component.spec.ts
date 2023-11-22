import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersMatchComponent } from './players-match.component';

describe('PlayersMatchComponent', () => {
  let component: PlayersMatchComponent;
  let fixture: ComponentFixture<PlayersMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersMatchComponent]
    });
    fixture = TestBed.createComponent(PlayersMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

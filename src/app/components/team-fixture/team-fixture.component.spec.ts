import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFixtureComponent } from './team-fixture.component';

describe('TeamFixtureComponent', () => {
  let component: TeamFixtureComponent;
  let fixture: ComponentFixture<TeamFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamFixtureComponent]
    });
    fixture = TestBed.createComponent(TeamFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

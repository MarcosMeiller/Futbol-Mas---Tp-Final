import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFixtureComponent } from './pre-fixture.component';

describe('PreFixtureComponent', () => {
  let component: PreFixtureComponent;
  let fixture: ComponentFixture<PreFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreFixtureComponent]
    });
    fixture = TestBed.createComponent(PreFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFollowComponent } from './view-follow.component';

describe('ViewFollowComponent', () => {
  let component: ViewFollowComponent;
  let fixture: ComponentFixture<ViewFollowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFollowComponent]
    });
    fixture = TestBed.createComponent(ViewFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

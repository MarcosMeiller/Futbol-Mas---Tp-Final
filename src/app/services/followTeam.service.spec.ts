import { TestBed } from '@angular/core/testing';

import { FollowServiceTeam } from './followTeam.service';

describe('FollowService', () => {
  let service: FollowServiceTeam;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowServiceTeam);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

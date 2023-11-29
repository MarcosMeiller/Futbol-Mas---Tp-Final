import { TestBed } from '@angular/core/testing';

import { FollowLeagueService } from './follow-league.service';

describe('FollowLeagueService', () => {
  let service: FollowLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

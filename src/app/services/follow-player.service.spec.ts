import { TestBed } from '@angular/core/testing';

import { FollowPlayerService } from './follow-player.service';

describe('FollowPlayerService', () => {
  let service: FollowPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

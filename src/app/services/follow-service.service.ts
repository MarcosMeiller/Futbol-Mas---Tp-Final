// follow.service.ts
import { Injectable } from '@angular/core';
import { Observable, forkJoin ,of} from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { FollowServiceTeam } from './followTeam.service'; 
import { FollowLeagueService } from './follow-league.service'; 
import { FollowPlayerService } from './follow-player.service'; 
import { Follow } from '../models/follow.model';
@Injectable({
  providedIn: 'root'
})
export class FollowService {
 

  constructor(
    private teamService: FollowServiceTeam,
    private leagueService: FollowLeagueService,
    private playerService: FollowPlayerService
  ) {}

  getUserFollows(): Observable<Follow[]> {
    return this.teamService.getUserFollowTeam().pipe(
      mergeMap((teams: Follow[]) => {
        const leagueObservable = this.leagueService.getUserFollowLeague();
        const playerObservable = this.playerService.getUserFollowPlayer();

        return forkJoin([leagueObservable, playerObservable]).pipe(
          mergeMap((data: Follow[][]) => {
            const [leagues, players] = data;
            const result: Follow[] = teams.concat(leagues, players);
            return of(result);
          })
        );
      })
    );
  }
}

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

            // Normalizar los datos para asegurarte de que todos tengan la propiedad 'name'
            const normalizedTeams = this.normalizeData(teams, 'name');
            const normalizedLeagues = this.normalizeLeague(leagues);
            const normalizedPlayers = this.normalizeData(players, 'name');

            const result: Follow[] = normalizedTeams.concat(normalizedLeagues, normalizedPlayers);
            return of(result);
          })
        );
      })
    );
  }

  private normalizeLeague(data: any[]){
    return data.map(item => {
      const followItem: Follow = {
        id: item[0].league.id, 
        name: item[0].league.name,
        photo: item[0].league.logo || item[0].photo,
        ...item
      };
      console.log(followItem)
      return followItem;
    });
  }

  private normalizeData(data: any[], commonProperty: string): Follow[] {
    return data.map(item => {
      const followItem: Follow = {
        id: item.id, 
        name: item[commonProperty],
        photo: item.logo || item.photo,
        ...item
      };
      return followItem;
    });
  }
}

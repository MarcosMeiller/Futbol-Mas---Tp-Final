import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FootballApiService } from '../../services/football-api.service';
import { FollowService } from 'src/app/services/follow-service.service';
import { Follow } from '../../models/follow.model'; 
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
 
  estadoParpadeo = 'visible';
  matches: any[]=[]
  title = 'futbol-mas';
  live:any;
  standings:any;
  idliga:any;
  followedMatches: any[] = [];
  followedLeagues: any[] = []
  loaded=true

  // isMouseDown = false;
  // startX: number;
  // scrollLeft: number;
  constructor(private footballApiService: FootballApiService,private authService: AuthService,private followService:FollowService, private route: Router, private matchService:MatchService) {
    this.FixtureLive()
  }
  ngOnInit() {
    
  }


  currentIndex = 0;

  scroll(direction: number): void {
    const newIndex = this.currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.matches.length) {
      this.currentIndex = newIndex;
    }
  }
   FixtureLive() {
   
    this.footballApiService.getFixtureLive().subscribe({
      next: (data: any) => {
        this.live = data.response;
        this.followService.getUserFollows().subscribe((follows: any[]) => {
          const followedTeams = new Set<number>();
          
          this.followedLeagues=follows
          this.getMatchesLeague()
          follows.forEach((follow) => {
            followedTeams.add(follow.id); 
          });

          
          this.followedMatches = this.live.filter((match: any) => {
            return (
              followedTeams.has(match.teams.home.id) ||
              followedTeams.has(match.teams.away.id) ||
              followedTeams.has(match.league.id)
            );
          });
        });
      },
      error: (data: any) => {
        console.log(data);
      }
    });
    this.loaded=false
  }
  getMatchesLeague() {
    console.log(this.followedLeagues);
  
    const observables = this.followedLeagues.map(league => {
      return this.matchService.getCurrentRoundByLague(league.id, '2023').pipe(
        switchMap((round: any) => {
          return this.matchService.getMatchByLeague(league.id, round.response).pipe(
            
            map((res: any) => {
              const matches={
                id: league.id,
                name: league.name,
                photo: league.photo,
                round: round.response, // Incluir la información del round
                matches: [],
              };
              matches.matches=res
              return matches
            })
          );
        }),
        catchError((err: any) => {
          console.log(err);
          return of(null); // Manejar errores y devolver un valor por defecto o null si es necesario
        })
      );
    });
  
    forkJoin(observables).subscribe(
      (matchesLeagues: any[]) => {
        this.followedLeagues = matchesLeagues//.filter(matchesLeague => matchesLeague !== null);
        console.log(matchesLeagues);
      },
      (error) => {
        console.error('Error al obtener partidos de ligas:', error);
      }
    );
  }

    StandingHome() {
      this.followService.getUserFollows().subscribe({
        next: (follows: Follow[]) => {
          
          follows.forEach((follow: Follow) => {
            
            this.footballApiService.getStanding(follow.id, '2023').subscribe({
              next: (data: any) => {
                console.log(`Clasificación para la liga ${follow.name}:`, data.response);
                
              },
              error: (error: any) => {
                console.log(error);
              }
            });
          });
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
 
  logout(): void {
    this.authService.logout();
  }

  formatMatchTime(timestamp: string): string {
    console.log(Math.floor(Number(timestamp)/60000))
    const matchDate = new Date(Number(timestamp) * 1000);
    const currentTime = new Date();
    
    const elapsedTimeInSeconds = Math.floor((currentTime.getTime() - matchDate.getTime()) / 1000);
    
    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    const seconds = elapsedTimeInSeconds % 60;
  
    if (elapsedTimeInSeconds < 45 * 60) {
      return `1er tiempo - ${this.padZero(minutes)}:${this.padZero(seconds)}`;
    } else if (elapsedTimeInSeconds < 90 * 60) {
      const remainingTimeInSeconds = elapsedTimeInSeconds - 45 * 60;
      const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
      const remainingSeconds = remainingTimeInSeconds % 60;
      return `2do tiempo - ${this.padZero(remainingMinutes)}:${this.padZero(remainingSeconds)}`;
    } else {
      const restMinutes = Math.floor((elapsedTimeInSeconds - 90 * 60) / 60);
      const restSeconds = (elapsedTimeInSeconds - 90 * 60) % 60;
  
      if (restMinutes >= 45) {
        return `2do tiempo - ${this.padZero(restMinutes - 45)}:${this.padZero(restSeconds)}`;
      } else {
        return `Entre Tiempo - ${this.padZero(restMinutes)}:${this.padZero(restSeconds)}`;
      }
    }
  }
  
  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
  
}
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FootballApiService } from '../../services/football-api.service';
import { FollowService } from 'src/app/services/follow-service.service';
import { Follow } from '../../models/follow.model'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'futbol-mas';
  live:any;
  standings:any;
  idliga:any;
  followedMatches: any[] = [];
  constructor(private footballApiService: FootballApiService,private authService: AuthService,private followService:FollowService, private route: Router) {}
  ngOnInit() {
    this.FixtureLive();
  }
  FixtureLive() {
   
    this.footballApiService.getFixtureLive().subscribe({
      next: (data: any) => {
        console.log(data);
        this.live = data.response;

        
        this.followService.getUserFollows().subscribe((follows: any[]) => {
          const followedTeams = new Set<number>();

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
  mostrarInfoPartido(id:number){
    this.route.navigate([`/view-match/${id}`])
  }
}
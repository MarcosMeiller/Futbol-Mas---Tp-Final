import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FootballApiService } from '../../services/football-api.service';
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
  constructor(private footballApiService: FootballApiService,private authService: AuthService) {}
  ngOnInit() {
    this.FixtureLive();
  }
  FixtureLive() {
      this.footballApiService.getFixtureLive().subscribe({
        next: (data: any) => {
          console.log(data);
          this.live = data.response;
        },
        error: (data: any) => {
          console.log(data);
        }
      });
    }

    StandingHome(){
    this.footballApiService.getStanding(this.idliga, '2023').subscribe({
      next: (data: any) => {
        console.log(data);
        this.standings=data.response;
    },
     error: (error: any) => {
      console.log(error);
     }
   });
    }
 
  logout(): void {
    this.authService.logout();
  }
}
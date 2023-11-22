import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { DetalleService } from 'src/app/services/detalle.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-standings-league',
  templateUrl: './standings-league.component.html',
  styleUrls: ['./standings-league.component.css']
})
export class StandingsLeagueComponent {
  liga:any;
  standings:any;
  @Input ()
  id:any;
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}
  ngOnInit() {
    this.liga = this.dataService.getLiga();
    if (this.liga && this.liga.league) 
  this.footballApiService.getStanding(this.liga.league.id, '2023').subscribe({
    next: (data: any) => {
      console.log(data);
      this.standings=data.response;
  },
   error: (error: any) => {
    console.log(error);
   }
 });
  }

}

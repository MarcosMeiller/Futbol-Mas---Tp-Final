import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { DetalleService } from 'src/app/services/detalle.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-statistics-team',
  templateUrl: './statistics-team.component.html',
  styleUrls: ['./statistics-team.component.css']
})
export class StatisticsTeamComponent {
  liga:any;
  statistic:any;
  @Input ()
  id:any;
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}
  ngOnInit() {
    this.liga = this.dataService.getLiga();
    if (this.liga && this.liga.league) {
  this.footballApiService.getStatisticsTeam(this.id,this.liga.league.id, '2023').subscribe({
    next: (data: any) => {
      console.log(data);
      this.statistic=data.response;
      
    },
    error: (error: any) => {
      console.log(error);
    }
  });
  }
 }

}

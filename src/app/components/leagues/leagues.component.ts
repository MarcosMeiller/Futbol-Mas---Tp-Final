import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';
@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  ligas: any;
  search='';
  ligasYEquipos:any;
  view='events';
  isFollowingLeague: { [leagueId: string]: boolean } = {};
  constructor(private footballApiService: FootballApiService,private followLeague: FollowLeagueService,private router: Router,private dataService: DetalleService) {}

  ngOnInit() {
    this.footballApiService.getLeagues().subscribe({
      next: (data: any) => {
        console.log(data)
        this.ligas = data.response;
      },
      error: (data: any) => {
        console.log(data)
      }
    });
  }
  toggleFollowLeague(liga: any) {
    const leagueId = liga.id;

    if (this.isFollowingLeague[leagueId]) {
      this.followLeague.UnfollowLeague(liga)
    } else {
     this.followLeague.createNewFollowLeague(liga);
    }

    this.isFollowingLeague[leagueId] = !this.isFollowingLeague[leagueId];
  }
  searchLeagues() {
    if (this.search.trim() !== '') {
      this.footballApiService.searchLeagueByName(this.search).subscribe((res: any) => {
        console.log(res);
        this.ligas = res.response;
      });
    } else {
      this.ngOnInit();
    }
  }

  mostrarInformacionLiga(liga: any) {
    this.dataService.setLiga(liga);
    this.router.navigate(['/detalleliga']);
  }
  
}
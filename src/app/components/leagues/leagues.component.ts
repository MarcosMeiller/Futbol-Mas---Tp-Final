import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';

@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  ligas: any;
  search='';
  ligasYEquipos:any;
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}

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

  searchLeaguesAndTeams() {
    if (this.search.trim() !== '') {
      this.footballApiService.searchLeaguesAndTeams(this.search).subscribe((res: any) => {
        console.log(res);
        this.ligasYEquipos = res.response;
      });
    } else {
      
      this.ngOnInit();
    }
  }

  mostrarInformacionLiga(liga: any) {
    this.dataService.setDatos(liga);
    this.router.navigate(['/detalleliga']);
  }
  
}
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

  searchLeagues(){
    this.footballApiService.searchAll(this.search).subscribe((res:any)=>{
      console.log(res)
      this.ligas=res.response
    })
  }


  mostrarInformacionLiga(liga: any) {
    this.dataService.setDatos(liga);
    this.router.navigate(['/detalleliga']);
  }
  
}
import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';
@Component({
  selector: 'app-player',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css' ]
})

export class PlayersComponent implements OnInit {
  jugadores: any;
  search=''
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}

  ngOnInit() {
    this.footballApiService.getPlayers().subscribe({
      next: (data: any) => {
        console.log(data)
        this.jugadores = data.response;
      },
      error: (data: any) => {
        console.log(data)
      }
    });
  }

  searchPlayer(){
    this.footballApiService.search(this.search).subscribe((res:any)=>{
      console.log(res)
      this.jugadores=res.response
    })
  }

  mostrarInformacionLiga(jugador: any) {
    this.dataService.setDatos(jugador);
    this.router.navigate(['/detallejugador']);
  }
  
}
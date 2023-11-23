import { Component } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
import { FollowPlayerService } from 'src/app/services/follow-player.service';
import { FollowServiceTeam } from 'src/app/services/followTeam.service';
@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent {
  jugadores: any;
  search=''
  equipo: any;
  view='events'
  selectedPlayer: any;

  
  constructor(private footballApiService: FootballApiService,private FollowServicePlayer: FollowPlayerService,private router: Router,private dataService: DetalleService,private followServiceTeam: FollowServiceTeam) {}
  ngOnInit() {
    this.equipo = this.dataService.getEquipo();
    this.footballApiService.getPlayers(this.equipo.team.id).subscribe({
      next: (data: any) => {
        console.log(data)
        this.jugadores = data.response; 
      },
      error: (data: any) => {
        console.log(data)
      }
    });
   }
  
   FollowPlayer(dato:any){
    console.log(dato);
  this.FollowServicePlayer.createNewFollowPlayer(dato);
  }
   searchPlayer() {
    if (this.search.trim() !== '') {
      this.footballApiService.searchPlayersByName(this.equipo.team.id,this.search).subscribe((res: any) => {
        console.log(res);
        this.selectedPlayer = res.response;
      });
    } else {
      this.selectedPlayer=[];
      this.ngOnInit();
    }
  }
  FollowTeam(dato:any){
    console.log(dato);
  this.followServiceTeam.createNewFollowTeam(dato);
  }

  mostrarInformacionJugador(jugador: any) {
    this.dataService.setJugador(jugador);   
    this.router.navigate(['/detallejugador']);
  }

  setView(name:string,event:Event){
    event.preventDefault();
    this.view=name
   }
}

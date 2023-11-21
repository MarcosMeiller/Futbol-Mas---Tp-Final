import { Component } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent {
  jugadores: any;
  search=''
  equipo: any;
  
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}
  ngOnInit() {
    this.equipo = this.dataService.getDatos();
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
  

  searchPlayer(){
    this.footballApiService.searchAll(this.search).subscribe((res:any)=>{
      console.log(res)
      this.jugadores=res.response
    })
  }

  mostrarInformacionJugador(jugador: any) {
    this.dataService.setDatos(jugador);
    this.router.navigate(['/detallejugador/']+jugador.id);
  }


}

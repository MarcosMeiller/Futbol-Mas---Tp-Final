import { Component, Input } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';

import { FootballApiService } from '../../services/football-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jugador-detalle',
  templateUrl: './jugador-detalle.component.html',
  styleUrls: ['./jugador-detalle.component.css']
})
export class JugadorDetalleComponent {
  @Input()
 jugador: any;

  player:any;
  constructor(private footballApiService: FootballApiService,private dataService: DetalleService,private route:ActivatedRoute) {}
  ngOnInit() {

    this.jugador = this.dataService.getJugador();
    this.footballApiService.getPlayerStatistic(this.jugador.id,'2023').subscribe({
      next: (data: any) => {
        console.log(data)
        this.player = data.response;
      },
      error: (data: any) => {
        console.log(data)
      }
    });
   }
  }





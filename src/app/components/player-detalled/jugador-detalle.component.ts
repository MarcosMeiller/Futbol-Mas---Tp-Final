import { Component } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
@Component({
  selector: 'app-jugador-detalle',
  templateUrl: './jugador-detalle.component.html',
  styleUrls: ['./jugador-detalle.component.css']
})
export class JugadorDetalleComponent {
 jugador: any;
  
  constructor(private dataService: DetalleService) {}
  ngOnInit() {
    this.jugador = this.dataService.getDatos();
  }


}

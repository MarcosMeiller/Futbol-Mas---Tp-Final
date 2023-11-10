import { Component } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent {
  
  equipo: any;
  
  constructor(private dataService: DetalleService) {}
  ngOnInit() {
    this.equipo = this.dataService.getDatos();
  }


}

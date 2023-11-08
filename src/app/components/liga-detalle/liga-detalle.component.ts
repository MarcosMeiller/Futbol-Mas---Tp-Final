import { Component,Input, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-liga-detalle',
  templateUrl: './liga-detalle.component.html',
  styleUrls: ['./liga-detalle.component.css']
})
export class LigaDetalleComponent  {
  
  liga: any;
  
  constructor(private dataService: DetalleService) {}
  ngOnInit() {
    this.liga = this.dataService.getDatos();
  }


}
  

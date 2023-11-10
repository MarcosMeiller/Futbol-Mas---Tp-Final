import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  private datos: any; 

  setDatos(data: any) {
    this.datos = data;
  }

  getDatos() {
    return this.datos;
  }
}

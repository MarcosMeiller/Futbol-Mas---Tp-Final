import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  private equipo: any; 
  private liga: any;
  private jugador: any;

  setJugador(jugador: any) {
    this.jugador = jugador;
  }

  getJugador() {
    return this.jugador;
  }
  
  setLiga(liga: any) {
    this.liga = liga;
  }

  getLiga() {
    return this.liga;
  }

  setEquipo(equipo: any) {
    this.equipo = equipo;
  }

  getEquipo() {
    return this.equipo;
  }

  
}

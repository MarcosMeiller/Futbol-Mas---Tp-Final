import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

import { AppComponent } from './app.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/liga-detalle/liga-detalle.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/jugador-detalle/jugador-detalle.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    TeamsComponent,
    PlayersComponent,
    SearchComponent,
    LigaDetalleComponent,
    EquipoDetalleComponent,
    JugadorDetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Agrega el módulo de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

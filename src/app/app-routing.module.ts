// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/liga-detalle/liga-detalle.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/jugador-detalle/jugador-detalle.component';
import { LoginComponent } from './components/login/login.component'; // Agrega esta línea
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent, canActivate: [AuthGuard] },
  { path: 'equipos', component: TeamsComponent, canActivate: [AuthGuard] },
  { path: 'jugadores', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'busqueda', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'detalleliga', component: LigaDetalleComponent, canActivate: [AuthGuard] },
  { path: 'detalleEquipo', component: EquipoDetalleComponent, canActivate: [AuthGuard] },
  { path: 'detallejugador', component: JugadorDetalleComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/ligas', pathMatch: 'full' },
  { path: '**', redirectTo: '/ligas' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

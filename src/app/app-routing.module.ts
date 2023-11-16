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
import { MatchViewComponent } from './components/match-view/match-view.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent },
  { path: 'equipos', component: TeamsComponent },
  { path: 'jugadores', component: PlayersComponent },
  { path: 'busqueda', component: SearchComponent },
  { path: 'detalleliga', component: LigaDetalleComponent },
  { path: 'detalleEquipo', component: EquipoDetalleComponent },
  { path: 'detallejugador', component: JugadorDetalleComponent },
  { path: 'login', component: LoginComponent },
  {path: 'register',component:RegisterUserComponent},
  {path: 'view-match/:id', component: MatchViewComponent},
  { path: '', redirectTo: '/ligas', pathMatch: 'full' },
  { path: '**', redirectTo: '/ligas' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

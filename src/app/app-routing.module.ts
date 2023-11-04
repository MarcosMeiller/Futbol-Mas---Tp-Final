import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent },
  { path: 'equipos', component: TeamsComponent },
  { path: 'jugadores', component: PlayersComponent },
  { path: 'busqueda', component: SearchComponent },
  { path: '', redirectTo: '/ligas', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/ligas' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

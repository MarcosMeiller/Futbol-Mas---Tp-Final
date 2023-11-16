// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './components/leagues/leagues.component';


import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/league-detalled/liga-detalle.component';
import { EquipoDetalleComponent } from './components/team-detalled/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/player-detalled/jugador-detalle.component';
import { LoginComponent } from './components/login/login.component'; // Agrega esta línea
import { AuthGuard } from './services/auth.guard';

import { MatchViewComponent } from './components/match-view/match-view.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent, canActivate: [AuthGuard]  },
  { path: 'busqueda', component: SearchComponent, canActivate: [AuthGuard]  },
  { path: 'detalleliga', component: LigaDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'detalleEquipo', component: EquipoDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'detallejugador', component: JugadorDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  {path: 'register',component:RegisterUserComponent},
  {path: 'view-match/:id', component: MatchViewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/ligas', pathMatch: 'full' },
  { path: '**', redirectTo: '/ligas' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

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
import { PredictionComponent } from './components/prediction/prediction.component';
import { PredictionAllComponent } from './components/prediction-all/prediction-all.component';

import { MatchViewComponent } from './components/match-view/match-view.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { ViewFollowComponent } from './components/view-follow/view-follow.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent, canActivate: [AuthGuard]  },
  { path: 'busqueda', component: SearchComponent, canActivate: [AuthGuard]  },
  { path: 'detalleliga', component: LigaDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'detalleEquipo', component: EquipoDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'detallejugador/:id', component: JugadorDetalleComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  {path: 'register',component:RegisterUserComponent},
  {path: 'view-match/:id', component: MatchViewComponent, canActivate: [AuthGuard] },
  {path: 'show-predictions/:id', component: PredictionAllComponent, canActivate: [AuthGuard] },
  {path: 'prediction-match', component: PredictionComponent, canActivate: [AuthGuard] },
  {path: 'updateUser', component: UpdateUserComponent },
  { path: 'view-follow', component: ViewFollowComponent ,},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/ligas' } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

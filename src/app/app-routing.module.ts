import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './components/leagues/leagues.component';


import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/liga-detalle/liga-detalle.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/jugador-detalle/jugador-detalle.component';
const routes: Routes = [
  { path: 'ligas', component: LeaguesComponent },
  

  { path: 'busqueda', component: SearchComponent },
  {path: 'detalleliga',component: LigaDetalleComponent},
  {path: 'detalleEquipo',component: EquipoDetalleComponent},
  {path: 'detallejugador',component: JugadorDetalleComponent},
  { path: '', redirectTo: '/ligas', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/ligas' } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

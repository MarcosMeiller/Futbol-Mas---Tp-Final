import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de ngModel
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchViewComponent } from './components/match-view/match-view.component';
import { MatchScoreComponent } from './components/match-score/match-score.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { AwayEventComponent } from './components/away-event/away-event.component';
import { MatchEventsComponent } from './components/match-events/match-events.component';
import { EventIconDirective } from './directives/event-icon.directive';
import { Routes,RouterModule } from '@angular/router';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/liga-detalle/liga-detalle.component';
import { EquipoDetalleComponent } from './components/equipo-detalle/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/jugador-detalle/jugador-detalle.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [

  {path: 'view-match/:id', component: MatchViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ErrorMsgComponent,
    SnackbarComponent,
    MatchViewComponent,
    MatchScoreComponent,
    HomeEventComponent,
    AwayEventComponent,
    MatchEventsComponent,
    EventIconDirective,
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
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:false}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

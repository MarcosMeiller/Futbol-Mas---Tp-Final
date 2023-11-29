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

import { SearchComponent } from './components/search/search.component';
import { LigaDetalleComponent } from './components/league-detalled/liga-detalle.component';
import { EquipoDetalleComponent } from './components/team-detalled/equipo-detalle.component';
import { JugadorDetalleComponent } from './components/player-detalled/jugador-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { LineupComponent } from './lineup/lineup.component';
import { PlayerLineupComponent } from './player-lineup/player-lineup.component';
import { MatchStaticsComponent } from './components/match-statics/match-statics.component';
import { PredictionComponent } from './components/prediction/prediction.component';
import { PredictionAllComponent } from './components/prediction-all/prediction-all.component';
import { MatchHistoryComponent } from './components/match-history/match-history.component';
import { HomeComponent } from './components/home/home.component';
import { TeamFixtureComponent } from './components/team-fixture/team-fixture.component';
import { StandingsLeagueComponent } from './components/standings-league/standings-league.component';
import { StatisticsTeamComponent } from './components/statistics-team/statistics-team.component';
import { PlayersMatchComponent } from './components/players-match/players-match.component';
import { ViewFollowComponent } from './components/view-follow/view-follow.component';


import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CardMatchComponent } from './components/card-match/card-match.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardLeagueComponent } from './components/card-league/card-league.component';



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
    SearchComponent,
    LigaDetalleComponent,
    EquipoDetalleComponent,
    JugadorDetalleComponent,
    LoginComponent,
    LineupComponent,
    PlayerLineupComponent,
    MatchStaticsComponent,
    PredictionComponent,
    PredictionAllComponent,
    MatchHistoryComponent,
    HomeComponent,
    StandingsLeagueComponent,
    StatisticsTeamComponent,
    PlayersMatchComponent,
    ViewFollowComponent,
    UpdateUserComponent,
    CardMatchComponent,
    SliderComponent,
    CardLeagueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TeamFixtureComponent,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchViewComponent } from './components/match-view/match-view.component';
import { MatchScoreComponent } from './components/match-score/match-score.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { AwayEventComponent } from './components/away-event/away-event.component';
import { MatchEventsComponent } from './components/match-events/match-events.component';

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
    MatchEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

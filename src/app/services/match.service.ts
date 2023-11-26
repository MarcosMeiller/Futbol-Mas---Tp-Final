import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Accede a los datos del JSON como cualquier objeto



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url= 'http://localhost:1234/fixtures'
  private  APIKEY='de4983f33aa715b8de21736f65cf9cf7'
  private apiUrl = 'https://v3.football.api-sports.io/fixtures';

  selectedMatch:any
  
  options={headers:new HttpHeaders({
    'x-apisports-key': this.APIKEY,
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }
  getMatch({matchId}:any){
    return this.http.get(this.url+`?id=${matchId}`,this.options)
  }
  
  getMatchHystory(teamsId:string){
    return this.http.get(this.apiUrl+`/headtohead?h2h=${teamsId}`,this.options)
  }

  setMatchSelected(match:any){
    this.selectedMatch=match
  }

  getMatchEvents(){
    console.log(this.selectedMatch)
    return this.selectedMatch.events
  }

  getLocalTeam(){
    return this.selectedMatch.teams.home
  }
  getAwayTeam(){
    return this.selectedMatch.teams.away
  }

  getHomeStatistics(){
    return this.selectedMatch.statistics[0].statistics
  }
  getAwayStatistics(){
    return this.selectedMatch.statistics[1].statistics
  }

  getLocalPlayers(){
    return this.selectedMatch.players[0].players
  }
  getAwayPlayers(){
    return this.selectedMatch.players[1].players
  }
}

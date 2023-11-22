import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Accede a los datos del JSON como cualquier objeto



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url= 'http://localhost:1234/fixtures'
  private  APIKEY='b3db8ca9c6ef70a78619374b611c75ef'

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
    return this.http.get(this.url+`/headtohead?h2h=${teamsId}`,this.options)
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
}

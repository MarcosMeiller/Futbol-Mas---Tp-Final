import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Accede a los datos del JSON como cualquier objeto



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  statusCodes = [
    { short: 'TBD', type: 'Scheduled' },
    { short: 'NS', type: 'Scheduled' },
    { short: '1H', type: 'In Play' },
    { short: 'HT', type: 'In Play' },
    { short: '2H', type: 'In Play' },
    { short: 'ET', type: 'In Play' },
    { short: 'BT', type: 'In Play' },
    { short: 'P', type: 'In Play' },
    { short: 'SUSP', type: 'In Play' },
    { short: 'INT', type: 'In Play' },
    { short: 'FT', type: 'Finished' },
    { short: 'AET', type: 'Finished' },
    { short: 'PEN', type: 'Finished' },
    { short: 'PST', type: 'Postponed' },
    { short: 'CANC', type: 'Cancelled' },
    { short: 'ABD', type: 'Abandoned' },
    { short: 'AWD', type: 'Not Played' },
    { short: 'WO', type: 'Not Played' },
    { short: 'LIVE', type: 'In Play' },
  ];
  
  
  
  

  private url= 'http://localhost:1234/fixtures'
  private  APIKEY='b65eb04d11125bddb886fa37cb9d0251'

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
  getMatchByLeague(league: string,round:string){
    return this.http.get(this.url+`?league=${league}&season=${'2023'}&round=${round}`,this.options)
    // let round

    // result.then(res=>{
    //   round=res
    // }).catch(err=>{console.log(err)})
  }
  getStatusInPlay()
  {return this.statusCodes.filter(status => status.type === 'In Play').map(status => status.short);}
  getCurrentRoundByLague(id:string, season:string){
    return this.http.get<any[]>(`${this.apiUrl}/rounds?league=${id}&season=${season}&current=true`,this.options)
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

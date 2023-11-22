import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private apiUrl = 'https://v3.football.api-sports.io/'; 
  
  private  APIKEY='4aae6e0ae3bfc754b192636ab49e3c77'
  options={headers:new HttpHeaders({

    'X-RapidAPI-Key': this.APIKEY,

    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.apiUrl}/leagues`,this.options);
  }


  getTeams(season: string, leagueId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teams?season=${season}&league=${leagueId}`,this.options);

  }
  

  getPlayers(team: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players/squads?team=${team}`,this.options);
  }

  getPlayerStatistic(id: number,season: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players?id=${id}&season=${season}`,this.options);

  }
  
  getFeaxture(id:number, season:string):Observable <any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fixtures?league=${id}&season=${season}`,this.options);

  }
  
getStanding(id:number,season:string):Observable  <any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/standings?league=${id}&season=${season}`,this.options);

}
getStatisticsTeam(idTeam:number, idLeague:number, season:string):Observable  <any[]> {

  return this.http.get<any[]>(`${this.apiUrl}/teams/statistics?league=${idLeague}&team=${idTeam}&season=${season}`,this.options);
 }
  getFixtureLive():Observable  <any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/fixture?live=all`,this.options);
   }
  searchLeagueByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leagues?name=${name}`, this.options);
  }
searchTeamsByName(name: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/teams?name=${name}`, this.options);
}

searchPlayersByName(teamId: number, playerName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/players?team=${teamId}&search=${playerName}`, this.options);
}
 }

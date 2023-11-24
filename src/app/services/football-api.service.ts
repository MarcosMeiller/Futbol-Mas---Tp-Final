import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private localApiUrl='http://localhost:1234/'
  private apiUrl = 'https://v3.football.api-sports.io/'; 
  
  private  APIKEY='5bd910d020bab78f966ec2f21625476b'
  options={headers:new HttpHeaders({

    'X-RapidAPI-Key': this.APIKEY,
    //'Authorization' : JSON.stringify(localStorage.getItem('token'))
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<any[]> {

     // return this.http.get<any[]>(`${this.apiUrl}/leagues`,this.options);
    

    const index: {startIndex: number, endIndex:number} = {startIndex : 0, endIndex: 5}
    const options={headers:new HttpHeaders({

      'X-RapidAPI-Key': this.APIKEY,
      'Index': JSON.stringify(index)
  
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    return this.http.get<any[]>(`${this.apiUrl}leagues`,options)
  }


  getTeams(season: string, leagueId: number): Observable<any[]> {


    return this.http.get<any[]>(`${this.apiUrl}/teams?league=${leagueId}&season=${season}`,this.options);

    /*const header={headers:new HttpHeaders({
      'Authorization' : JSON.stringify(localStorage.getItem('token'))
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    console.log(localStorage.getItem('token'))
    return this.http.get<any[]>(`${this.localApiUrl}teams?season=${season}&league=${leagueId}`,header);
*/
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

  getfeaxtureForiD(id:number):Observable <any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fixtures?id=${id}`,this.options);

  }

  getPreFixture(id:number, season:string):Observable <any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/odds?league=${id}&season=${season}`,this.options);

  }
  
getStanding(id:number,season:string):Observable  <any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/standings?league=${id}&season=${season}`,this.options);

}
getStatisticsTeam(idTeam:number, idLeague:number, season:string):Observable  <any[]> {

  return this.http.get<any[]>(`${this.apiUrl}/teams/statistics?league=${idLeague}&team=${idTeam}&season=${season}`,this.options);
 }
  getFixtureLive():Observable  <any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/fixtures?live=${'all'}`,this.options);
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

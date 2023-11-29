import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private localApiUrl='http://localhost:1234/'
  private apiUrl = 'https://v3.football.api-sports.io/'; 
  
private  APIKEY='b65eb04d11125bddb886fa37cb9d0251'

  options={headers:new HttpHeaders({

    'x-apisports-key': this.APIKEY,
    'Authorization' :localStorage.getItem('token') || ''
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  optionsApi={headers:new HttpHeaders({

    'x-apisports-key': this.APIKEY,
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<any[]> {

     // return this.http.get<any[]>(`${this.apiUrl}/leagues`,this.options);
    

    const index: {startIndex: number, endIndex:number} = {startIndex : 0, endIndex: 5}
    const options={headers:new HttpHeaders({

      'x-apisports-key': this.APIKEY,
      'Index': JSON.stringify(index)
  
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    return this.http.get<any[]>(`${this.localApiUrl}leagues`,options)
  }

  getLeagueById(id:string): Observable<any[]> {

    // return this.http.get<any[]>(`${this.apiUrl}/leagues`,this.options);
   

   const index: {startIndex: number, endIndex:number} = {startIndex : 0, endIndex: 5}
   const options={headers:new HttpHeaders({

     'x-apisports-key': this.APIKEY,
     'Index': JSON.stringify(index)
 
     //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
   })}
   return this.http.get<any[]>(`${this.localApiUrl}leagues/${id}`,this.options)
 }


  getTeams(season: string, leagueId: number): Observable<any[]> {
    console.log(typeof localStorage.getItem('token'))

    return this.http.get<any[]>(`${this.localApiUrl}teams?league=${leagueId}&season=${season}`,this.options);

    /*const header={headers:new HttpHeaders({
      'Authorization' : JSON.stringify(localStorage.getItem('token'))
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    console.log(localStorage.getItem('token'))
    return this.http.get<any[]>(`${this.localApiUrl}teams?season=${season}&league=${leagueId}`,header);
*/
  }

  
  

  getPlayers(team: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}players/squads?team=${team}`,this.options);
  }

  getPlayerStatistic(id: number,season: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}players?id=${id}&season=${season}`,this.options);

  }
  
  getFeaxture(id:number, season:string, fromdate:string , todate:string):Observable <any[]> {
    return this.http.get<any[]>(`${this.apiUrl}fixtures?team=${id}&season=${season}&from=${fromdate}&to=${todate}`,this.options);

  }

 

  
getStanding(id:number,season:string):Observable  <any[]> {
  return this.http.get<any[]>(`${this.apiUrl}standings?league=${id}&season=${season}`,this.options);

}
getStatisticsTeam(idTeam:number, idLeague:number, season:string):Observable  <any[]> {

  return this.http.get<any[]>(`${this.apiUrl}teams/statistics?league=${idLeague}&team=${idTeam}&season=${season}`,this.options);
 }
  getFixtureLive():Observable  <any[]> {

    return this.http.get<any[]>(`${this.apiUrl}fixtures?live=${'all'}`,this.optionsApi);
   }
  searchLeagueByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}leagues?search=${name}`, this.options)
  }
searchTeamsByName(name: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}teams?search=${name}`, this.options);
}

searchPlayersByName(teamId: number, playerName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}players?team=${teamId}&search=${playerName}`, this.options);
}
 }

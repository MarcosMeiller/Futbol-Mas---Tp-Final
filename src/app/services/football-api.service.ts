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
  //private  APIKEY='4aae6e0ae3bfc754b192636ab49e3c77'
  private  APIKEY='71e9962cf38604017c974f8be33f449b'
  options={headers:new HttpHeaders({

    'X-RapidAPI-Key': this.APIKEY,
    'Authorization' : JSON.stringify(localStorage.getItem('token'))
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<any[]> {
    const index: {startIndex: number, endIndex:number} = {startIndex : 0, endIndex: 5}
    const options={headers:new HttpHeaders({

      'X-RapidAPI-Key': this.APIKEY,
      'Index': JSON.stringify(index)
  
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    return this.http.get<any[]>(`${this.localApiUrl}leagues`,options);
  }


  getTeams(season: string, leagueId: number): Observable<any[]> {
    const header={headers:new HttpHeaders({
      'Authorization' : JSON.stringify(localStorage.getItem('token'))
      //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    })}
    console.log(localStorage.getItem('token'))
    return this.http.get<any[]>(`${this.localApiUrl}teams?season=${season}&league=${leagueId}`,header);

  }


  getPlayers(team: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players/squads?team=${team}`,this.options);
  }

  getPlayerStatistic(id: number,season: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players?id=${id}&season=${season}`,this.options);

  }

  

  searchAll(query: string): Observable<any> {
    const searchLeagues$ = this.http.get<any[]>(`${this.apiUrl}/leagues?search=${query}`, this.options);
    const searchTeams$ = this.http.get<any[]>(`${this.apiUrl}/teams?search=${query}`, this.options);
    const searchPlayers$ = this.http.get<any[]>(`${this.apiUrl}/players?search=${query}`, this.options);
  
    return forkJoin([searchLeagues$, searchTeams$, searchPlayers$]);
  }
}

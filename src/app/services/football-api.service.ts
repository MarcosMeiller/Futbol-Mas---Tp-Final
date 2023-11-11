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
  private  APIKEY='71e9962cf38604017c974f8be33f449b'
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

  getPlayers(season: string, leagueId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players?season=${season}&league=${leagueId}`,this.options);
  }

  

  searchAll(query: string): Observable<any> {
    const searchLeagues$ = this.http.get<any[]>(`${this.apiUrl}/leagues?search=${query}`, this.options);
    const searchTeams$ = this.http.get<any[]>(`${this.apiUrl}/teams?search=${query}`, this.options);
    const searchPlayers$ = this.http.get<any[]>(`${this.apiUrl}/players?search=${query}`, this.options);
  
    return forkJoin([searchLeagues$, searchTeams$, searchPlayers$]);
  }
}

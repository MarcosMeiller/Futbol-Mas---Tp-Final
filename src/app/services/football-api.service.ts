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
  //private  APIKEY='4aae6e0ae3bfc754b192636ab49e3c77'
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


  getPlayers(team: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players/squads?team=${team}`,this.options);
  }

  getPlayerStatistic(id: number,season: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players?id=${id}&season=${season}`,this.options);

  }

  

  
  searchLeaguesAndTeams(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leagues?name=${query}`, this.options)
      .pipe(
        switchMap((leagues: any) => {
          const leagueIds = leagues.response.map((league: any) => league.league.id);
          return this.http.get<any[]>(`${this.apiUrl}/teams?season=2023&league=${leagueIds.join(',')}`, this.options);
        })
      );
  }
searchTeamsByName(name: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/teams?name=${name}`, this.options);
}

searchPlayersByName(teamId: number, playerName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/players?team=${teamId}&search=${playerName}`, this.options);
}
 }

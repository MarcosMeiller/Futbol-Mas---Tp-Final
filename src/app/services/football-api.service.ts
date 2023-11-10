import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private apiUrl = 'https://v3.football.api-sports.io/'; 
  private  APIKEY='b3db8ca9c6ef70a78619374b611c75ef'
  options={headers:new HttpHeaders({
    'x-apisports-key': 'b3db8ca9c6ef70a78619374b611c75ef',
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.apiUrl}/leagues`,this.options);
  }

  getTeams(season:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teams?season=${season}`,this.options);
  }

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players`,this.options);
  }

  search(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leagues?search=${query}`,this.options);
  }
}

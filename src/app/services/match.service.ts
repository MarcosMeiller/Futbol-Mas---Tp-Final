import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Accede a los datos del JSON como cualquier objeto



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url= 'https://v3.football.api-sports.io/fixtures'
  private  APIKEY='71e9962cf38604017c974f8be33f449b'

  
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
}

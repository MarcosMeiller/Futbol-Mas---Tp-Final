import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Accede a los datos del JSON como cualquier objeto



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url= 'http://localhost:1234/fixtures'
  private  APIKEY='b3db8ca9c6ef70a78619374b611c75ef'

  
  options={headers:new HttpHeaders({
    'x-apisports-key': this.APIKEY,
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient) {
  }
  getMatch({matchId}:any){
    console.log("holas get match")
    return this.http.get(this.url+`?id=${matchId}`,this.options)
  }
  
  getMatchHystory(teamsId:string){
    return this.http.get(this.url+`/headtohead?h2h=${teamsId}`,this.options)
  }
}

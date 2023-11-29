import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowPlayerService {

  private apiUrlTeam = 'http://localhost:1234/players';
  private apiUrlFollow = 'http://localhost:1234/follows/players';
  options={headers:new HttpHeaders({

    'Content-Type': 'application/json',
    'Authorization' : `${localStorage.getItem('token')}`
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  apiOptions={headers:new HttpHeaders({

    'Content-Type': 'application/json',
    'Authorization' : `${localStorage.getItem('token')}`
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient, private router: Router) { }

  createNewFollowPlayer(followData: any) {
  
    console.log('creando follow')
    this.http.post(this.apiUrlFollow+followData,'',this.options)
      .subscribe(
        response => {
        },
        error => {
          console.error('Error creating follow', error);
        }
      );
  }
  UnfollowPlayer(followData: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
      this.http.delete(this.apiUrlFollow + `/${followData.id}`,this.options)
  }
  getUserFollowPlayer(): Observable <any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    const url = `${this.apiUrlFollow}`;
    return this.http.get<any[]>(url, this.options);
  }

}

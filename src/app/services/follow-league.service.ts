import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowLeagueService {

  private apiUrlTeam = 'http://localhost:1234/leagues';
  private apiUrlFollow = 'http://localhost:1234/follows/leagues';
  constructor(private http: HttpClient, private router: Router) { }

createNewFollowLeague(followData: any) {
    const token = localStorage.getItem('token');
  console.log(followData);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    this.http.post(this.apiUrlTeam, followData, { headers })
      .subscribe(
        response => {
        },
        error => {
          console.error('Error creating prediction', error);
        }
      );
      this.http.post(this.apiUrlFollow + `/${followData.id}`,{headers})
  }
  UnfollowLeague(followData: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
      this.http.delete(this.apiUrlFollow + `/${followData.id}`,{headers})
  }
  getUserFollowLeague(): Observable <any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    const url = `${this.apiUrlFollow}`;
    return this.http.get<any[]>(url, { headers });
  }

}

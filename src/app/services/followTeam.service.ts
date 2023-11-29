import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FollowServiceTeam {

  private apiUrlTeam = 'http://localhost:1234/teams';
  private apiUrlFollow = 'http://localhost:1234/follows/teams';
  options={headers:new HttpHeaders({

    'Content-Type': 'application/json',
    'Authorization' : `${localStorage.getItem('token')}`
    //'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  })}
  constructor(private http: HttpClient, private router: Router) { }

  createNewFollowTeam(followData: any) {
    
    console.log('creando follow')
    this.http.post(this.apiUrlFollow+'/'+followData,'',this.options)
      .subscribe({next:
        response => {
          console.log('Follow created')
        },
        error: error => {
          console.error('Error creating league', error);
        }
      }
      );
  }
 
 
  getUserFollowTeam(): Observable <any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    const url = `${this.apiUrlFollow}`;
    return this.http.get<any[]>(url, this.options);
  }


  
  UnfollowTeam(followData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    return this.http.delete(this.apiUrlFollow + `/${followData.id}`, { headers })
      .subscribe(
        (response) => {
          console.log( response);
          // Puedes hacer algo más aquí si es necesario
        },
        (error) => {
          console.error('Error al desuscribirse:', error);
          console.log('Cuerpo de la respuesta:', error.error);
          // Puedes manejar el error de acuerdo a tus necesidades
        }
      );
  }
  

}
  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private apiUrl = 'http://localhost:1234';

  constructor(private http: HttpClient, private router: Router) { }

  GetFollowPlayer(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/follows/players`)
    }
}
  
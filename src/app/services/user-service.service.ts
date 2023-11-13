import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user!: User

  private apiURL = 'http://localhost:1234/users'
  constructor( private http: HttpClient) { }

  getByUsername(value : string){
    return this.http.get(this.apiURL + '?username='+value)
  }

  registerUser (user: User){
    const httpOptions= {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post(this.apiURL,user,httpOptions)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiURL = 'http://localhost:1234/users'
  constructor( private http: HttpClient) { }

  getByUsername(value : string): Promise<any>{
    return this.http.get(this.apiURL + '?username='+value).toPromise()
  }

  registerUser (user: User){
    const httpOptions= {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post(this.apiURL,user,httpOptions).toPromise()
  }

}

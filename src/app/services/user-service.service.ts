import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiURL = 'http://localhost:1234/users'
  constructor( private http: HttpClient) { }

  getByUsername(value : string): Promise<any>{
    return this.http.get(this.apiURL + '?username='+value).toPromise()
  }

}

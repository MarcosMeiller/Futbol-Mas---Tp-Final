import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiURL = 'http://localhost:1234/predictions';

  constructor(private http: HttpClient) { }

  createPrediction(predictionData: any) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    this.http.post(this.apiURL, predictionData, { headers })
      .subscribe(
        response => {
        },
        error => {
          console.error('Error creating prediction', error);
        }
      );
  }

  getAllPredictions(matchId: number): Observable <any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    const url = `${this.apiURL}/${matchId}`;
    return this.http.get<any[]>(url, { headers });
  }

  getTopPredictions(matchId: number): Observable <any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });

    const url = `${this.apiURL}/top/${matchId}`;
    return this.http.get<any>(url, { headers });
}

}

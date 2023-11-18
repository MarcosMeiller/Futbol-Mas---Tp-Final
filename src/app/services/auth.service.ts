// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:1234';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { Email: email, Password: password };

    return this.http.post<any>(`${this.apiUrl}/users/login`, loginData).pipe(
      tap((response) => {
        if (response.token) {
          this.saveToken(response.token);
          this.saveUser(response.user);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    console.log("esta activado? " + !!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.clearUser();
    this.clearToken();
    this.router.navigate(['/login']);
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private clearToken(): void {
    localStorage.removeItem('token');
  }

  private saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  clearUser(): void {
    localStorage.removeItem('user');
  }
}

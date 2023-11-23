import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewNav=false
  title = 'futbol-mas';
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
  }

  isLoginPage() {
    return this.router.url.includes('/login');
  }

  isRegisterPage() {
    return this.router.url.includes('/register');
  }
  updateUser(){
    this.router.navigate(['/updateUser'])
  }
}

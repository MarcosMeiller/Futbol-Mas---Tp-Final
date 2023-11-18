import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'futbol-mas';
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

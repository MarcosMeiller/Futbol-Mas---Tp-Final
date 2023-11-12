// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según la ubicación de tu servicio de autenticación

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (submit)="login()">
      <label>Email:</label>
      <input [(ngModel)]="email" name="email" type="email" required>

      <label>Password:</label>
      <input [(ngModel)]="password" name="password" type="password" required>

      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Respuesta exitosa:', response);
        // Manejar la respuesta exitosa aquí, por ejemplo, redirigir a otra página
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
}

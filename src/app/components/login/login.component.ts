// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según la ubicación de tu servicio de autenticación
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Respuesta exitosa:', response);
        // Redirigir al usuario a localhost:4200/ después del inicio de sesión exitoso
        this.router.navigate(['/ligas']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        this.error = 'Error en el inicio de sesión. Verifique sus credenciales.';
      }
    );
  }
}

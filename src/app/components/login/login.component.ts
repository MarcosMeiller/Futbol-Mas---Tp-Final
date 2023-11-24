import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/models/custom-validators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = '';
  msg='Error registering user, try again in a moment!'
  bg=''
  showSnack ='hidden'
  hidden=false
  user: User = new User()

  constructor(private authService: AuthService, private router: Router) {}

  registerForm : FormGroup = new FormGroup({
    'email' : new FormControl(this.user.Email,
      [ //Validators
        Validators.required,
        Validators.email
      ]),
    'password' : new FormControl(this.user.Password,
      [ //Validators
        Validators.required
      ])
  })
  login() {
    this.user.Password=this.password?.value
    this.user.Email=this.email?.value
    this.authService.login(this.user.Email, this.user.Password).subscribe(
      (response) => {
        console.log('Respuesta exitosa:', response);
        this.router.navigate(['/home']); //esto despues tenemos que ver a donde cambiarlo.
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        this.error = 'Error en el inicio de sesión. Verifique sus credenciales.';
      }
    );
  }


isLoginButtonDisabled(): boolean {
  return !this.email || !this.password;
}

areFieldsCompleted(): boolean {
  return !!this.email && !!this.password;
}
get password(){
  return this.registerForm.get('password')
}
get email(){
  return this.registerForm.get('email')
}
register(){
  this.router.navigate(['/register'])
}
}

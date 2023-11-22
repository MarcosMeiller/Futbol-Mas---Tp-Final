import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/models/custom-validators';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  msg='Error registering user, try again in a moment!'
  bg=''
  showSnack ='hidden'
  hidden=false
  user: User = new User()
  registerForm : FormGroup = new FormGroup({
    'username' : new FormControl(this.user.Username,
      [ //Validators
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_-]+$/),
      ],
      [ CustomValidators.userExist( this.userServices )]),
    'password' : new FormControl(this.user.Password,
      [ //Validators
        Validators.required
      ]),
    'email' : new FormControl(this.user.Email,
      [ //Validators
        Validators.required,
        Validators.email
      ]),
    'lastname' : new FormControl(this.user.LastName,
      [ //Validators
        Validators.required
      ]),
    'country' : new FormControl(this.user.Country,
      [ //Validators
        Validators.required
      ]),
      'name' : new FormControl(this.user.FirstName,
        [ //Validators
          Validators.required
        ]),
      'passwordRepeat': new FormControl('', [Validators.required]),
  })

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private userServices:UserServiceService, private router: Router){}

  get username(){
    return this.registerForm.get('username')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get passwordRepeat(){
    return this.registerForm.get('passwordRepeat')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get name(){
    return this.registerForm.get('name')
  }
  get lastname(){
    return this.registerForm.get('lastname')
  }
  get country(){
    return this.registerForm.get('country')
  }

  registerUser(){
    const formValues = this.registerForm.value;
    this.user.Username=this.username?.value
    this.user.Password=this.password?.value
    this.user.Email=this.email?.value
    this.user.FirstName=this.name?.value
    this.user.LastName=this.lastname?.value
    this.user.Country=this.country?.value
    if (formValues.password === formValues.passwordRepeat) {
      this.userServices.registerUser(this.user).subscribe({
        next: response => {
          this.msg = 'Registered user successfully';
          this.bg = 'bg-green-500';
          this.router.navigate(['/login']);
        },
        error: response => {
          this.msg = 'Error registering user: ' + response;
          this.bg = 'bg-red-500';
        }
      });
    } else {
      this.msg = 'Passwords do not match, try again';
      this.bg = 'bg-red-500';
    }

    this.showSnack='hide'
    setTimeout(()=>{
      this.showSnack='hidden'
      this.router.navigate(['/login'])
    },3000)
  }
}

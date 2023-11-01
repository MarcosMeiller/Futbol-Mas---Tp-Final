import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/models/custom-validators';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  user: User = new User()
  registerForm!: FormGroup

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private userServices:UserServiceService){}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username' : new FormControl(this.user.username,
        [ //Validators
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9_-]+$/),
        ],
        [ CustomValidators.userExist( this.userServices )]),
      'password' : new FormControl(this.user.username,
        [ //Validators
          Validators.required
        ]),
      'email' : new FormControl(this.user.username,
        [ //Validators
          Validators.required
        ]),
      'lastname' : new FormControl(this.user.username,
        [ //Validators
          Validators.required
        ]),
      'country' : new FormControl(this.user.username,
        [ //Validators
          Validators.required
        ]),
        'name' : new FormControl(this.user.username,
          [ //Validators
            Validators.required
          ]),
    })
  }

  get username(){
    return this.registerForm.get('username')
  }
  get password(){
    return this.registerForm.get('password')
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
}

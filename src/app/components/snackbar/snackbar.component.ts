import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('show', [
      state('hidden',style({ transform: 'translate(-50%,200%)'})),
      state('hide',style({ transform: 'translate(-50%,0%)'})),
      transition('*=>*',  animate('400ms ease-in-out'))
    ])
  ]
})
export class SnackbarComponent{
  @Input()
  msg=''
  @Input()
  state='hidden'
}

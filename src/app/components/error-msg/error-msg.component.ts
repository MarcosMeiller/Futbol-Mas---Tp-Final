import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {
  @Input()
  msg=''

  @Input()
  conditions:boolean[]=[]

  // check(condition:boolean[]){
  //   if(cond)
  // }
}

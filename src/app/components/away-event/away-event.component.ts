import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-away-event',
  templateUrl: './away-event.component.html',
  styleUrls: ['./away-event.component.css']
})
export class AwayEventComponent implements OnInit {
  
  
  @Input()
  event:any
  
 player!: { id: number; name: string; };
  asist!: { id: number; name: string; };
  time!: {elapsed:number}
  
  eventType :{type:string,detail :string}={type: '',detail:''}

  ngOnInit(): void {
    this.eventType.detail= this.event.detail
    this.eventType.type=this.event.type
    this.player=this.event.player 
    this.asist=this.event.assist
    this.time=this.event.time
  }
}

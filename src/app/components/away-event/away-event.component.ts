import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-away-event',
  templateUrl: './away-event.component.html',
  styleUrls: ['./away-event.component.css']
})
export class AwayEventComponent implements OnInit {
  
  @Input()
  event:any
  
  type=""
  player!: { id: number; name: string; };
  asist!: { id: number; name: string; };
 
  ngOnInit(): void {
    console.log(this.event)
    this.type=this.event.type
    this.player=this.event.player 
    this.asist=this.event.assist
  }
}

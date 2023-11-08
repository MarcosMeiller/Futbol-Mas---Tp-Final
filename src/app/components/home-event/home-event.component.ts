import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {
  
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

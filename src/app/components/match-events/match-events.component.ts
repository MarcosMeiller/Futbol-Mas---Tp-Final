import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-match-events',
  templateUrl: './match-events.component.html',
  styleUrls: ['./match-events.component.css']
})
export class MatchEventsComponent{

  

  @Input()
   events:Event[]=[]
  @Input()
  idHome=0
  event!: Event;
  @Input()
  idAway=0
  constructor(private matchService: MatchService){}


  
}

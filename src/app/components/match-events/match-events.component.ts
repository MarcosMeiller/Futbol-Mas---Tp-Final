import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-match-events',
  templateUrl: './match-events.component.html',
  styleUrls: ['./match-events.component.css']
})
export class MatchEventsComponent implements OnInit{


  events:Event[]=[]
  idHome=0
  event!: Event;
  idAway=0
  constructor(private matchService: MatchService){}

  ngOnInit(): void {
    this.events=this.matchService.getMatchEvents()
    this.idHome=this.matchService.getLocalTeam().id
    this.idAway=this.matchService.getAwayTeam().id
  }
   

  


  
}

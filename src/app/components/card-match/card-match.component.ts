import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css'],
   animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ],
  })
export class CardMatchComponent implements OnInit{
  @Input()
  match:any

  live=false

  constructor(private route : Router, private matchService:MatchService){}

  ngOnInit(): void {
    if(this.matchService.getStatusInPlay().includes(this.match.fixture.status.short)){
      this.live=true
    }
  }
  mostrarInfoPartido(id:number){
    this.route.navigate([`/view-match/${id}`])
  }
}

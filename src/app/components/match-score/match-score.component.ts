import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})

export class MatchScoreComponent implements OnInit{

  @Input()
  matchId=0

  awayResult=0
  homeResult=0

  match!: any | null;
  constructor(private matchService : MatchService){}
  ngOnInit(): void {
    this.loadMatch()
  }

  loadMatch()
  {
    this.matchService.getMatch({matchId: this.matchId}).subscribe({
      next: (res:any)=> {this.match=res.response[0]; console.log(res.response[0]);},
      error: (res)=>this.match=null
    })
  }
 
}

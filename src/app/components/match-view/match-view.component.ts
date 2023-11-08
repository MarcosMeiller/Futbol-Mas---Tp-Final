import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  @Input()
  matchId=0

  match!: any | null;
  constructor(private matchService : MatchService){}
  ngOnInit(): void {
    this.loadMatch()
  }

  loadMatch()
  {
    this.matchService.getMatch({matchId: this.matchId}).subscribe({
      next: (res:any)=> {this.match=res.response[0]; console.log(this.match);},
      error: (res)=>this.match=null
    })
  }
 
}

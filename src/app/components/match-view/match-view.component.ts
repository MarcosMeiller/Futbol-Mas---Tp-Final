import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {


  matchId=0
  view='events'
  match!: any | null;
  constructor(private matchService : MatchService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.matchId=Number(this.route.snapshot.paramMap.get('id'))
    this.loadMatch()
  }

  loadMatch()
  {
    this.matchService.getMatch({matchId: this.matchId}).subscribe({
      next: (res:any)=> {this.match=res.response[0];console.log(this.match)},
      error: (res)=>this.match=null
    })
  }
 setView(name:string,event:Event){
  event.preventDefault();
  this.view=name
 }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {


  isLoading =false
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
    this.isLoading=true
    this.matchService.getMatch({matchId: this.matchId}).subscribe({
      next: (res:any)=> {
        this.match=res[0];
        console.log(this.match);
        this.isLoading=false
        this.matchService.setMatchSelected(this.match)},
      error: (res)=>{console.log(res);this.match=null}
    })
  }
 setView(name:string,event:Event){
  event.preventDefault();
  this.view=name
 }
}

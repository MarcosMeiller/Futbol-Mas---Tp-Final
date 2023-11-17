import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit{
@Input ()
idLocal='';

@Input()
idVisit='';

history:any;
constructor(private matchService : MatchService){}
ngOnInit(): void {
this.loadMatchHistory();
}
loadMatchHistory()
  {
    this.matchService.getMatchHystory(this.idLocal+'-'+this.idVisit).subscribe({
      next: (res:any)=> {this.history=res.response;console.log(this.history)},
      error: (res)=>{this.history=null; console.log(res)}
    })
  }
}

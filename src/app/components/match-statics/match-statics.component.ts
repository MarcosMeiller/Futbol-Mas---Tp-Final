import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-statics',
  templateUrl: './match-statics.component.html',
  styleUrls: ['./match-statics.component.css']
})
export class MatchStaticsComponent implements OnInit {

  constructor(private matchServices: MatchService){}

statics: {homeValue:string,type:string, awayValue:string}[]=[]
  ngOnInit(): void {
    this.statics=this.mapStatics(this.matchServices.getHomeStatistics(),this.matchServices.getAwayStatistics())
    console.log(this.statics)
  }

  mapStatics(local:any,away:any){
    return local.map((stat: { type: any; value: any; })=>{
      const statAway= away.find((itemAway: { type: any; })=>itemAway.type===stat.type)

      return {
        homeValue: stat.value,
        type: stat.type,
        awayValue: statAway.value
      }
    })
  }
}

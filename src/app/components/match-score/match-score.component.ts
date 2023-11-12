import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})

export class MatchScoreComponent implements OnInit {
  ngOnInit(): void {
    
  }

  
@Input()
  match:any|null 
  awayResult=0
  homeResult=0

  
}

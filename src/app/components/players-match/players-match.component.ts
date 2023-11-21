import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-players-match',
  templateUrl: './players-match.component.html',
  styleUrls: ['./players-match.component.css']
})
export class PlayersMatchComponent implements OnInit {

  localPlayers: any
  awayPlayers: any
  constructor(private matchService:MatchService, private router: Router,private detalleService:DetalleService){}
  ngOnInit(): void {
    this.localPlayers=this.matchService.getLocalPlayers()
    this.awayPlayers=this.matchService.getAwayPlayers()
  }

  openPlayer(id:any){
    this.router.navigate(['/detallejugador/']+id);
  }
}

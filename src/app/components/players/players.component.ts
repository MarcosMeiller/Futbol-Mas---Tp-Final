import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-player',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css' ]
})
export class PlayersComponent implements OnInit {
  jugadores: any[] = [];

  constructor(private footballApiService: FootballApiService) {}

  ngOnInit() {
    this.footballApiService.getPlayers().subscribe((data: any[]) => {
      this.jugadores = data;
    });
  }
}

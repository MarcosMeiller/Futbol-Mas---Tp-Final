import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  ligas: any[] = [];

  constructor(private footballApiService: FootballApiService) {}

  ngOnInit() {
    this.footballApiService.getLeagues().subscribe((data: any[]) => {
      this.ligas = data;
    });
  }
}

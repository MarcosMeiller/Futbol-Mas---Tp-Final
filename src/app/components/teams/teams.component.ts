import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  equipos: any[] = [];

  constructor(private footballApiService: FootballApiService) {}

  ngOnInit() {
    this.footballApiService.getTeams().subscribe((data: any[]) => {
      this.equipos = data;
    });
  }
}

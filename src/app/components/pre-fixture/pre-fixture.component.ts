import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-fixture',
  templateUrl: './pre-fixture.component.html',
  styleUrls: ['./pre-fixture.component.css']
})
export class PreFixtureComponent implements OnInit {
  liga:any;
  fixtures:any;
  fixtureD:any;
  @Input ()
  id:any;
  constructor(private footballApiService: FootballApiService,private router: Router) {}

  ngOnInit() {
    this.footballApiService.getPreFixture(this.liga.league.id, '2023').subscribe({
      next: (data: any) => {
        console.log(data);
        this.fixtures = data.response;

        
        this.fixtures.forEach((fixture: any) => {
          this.footballApiService.getfeaxtureForiD(fixture.id).subscribe({
            next: (fixtureDetails: any) => {
              console.log('Detalles del partido:', fixtureDetails);
              this.fixtureD=fixtureDetails;
            },
            error: (error: any) => {
              console.log('Error al obtener detalles del partido:', error);
            }
          });
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  navigateToViewMatch(matchId: number) {
    this.router.navigate(['view-match/:id', matchId]);
  }

 }



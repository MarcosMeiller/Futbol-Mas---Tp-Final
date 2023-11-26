import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-pre-fixture',
  templateUrl: './pre-fixture.component.html',
  styleUrls: ['./pre-fixture.component.css']
})
export class PreFixtureComponent implements OnInit {
  liga:any;
  fixtures:any;
  fixtureD :any[]=[];
  @Input ()
  id:any;
  constructor(private footballApiService: FootballApiService,private router: Router) {}

  ngOnInit() {
    this.footballApiService.getPreFixture(this.id, '2023').subscribe({
      next: (data: any) => {
        console.log(data);
        this.fixtures = data.response;

       
        const requests = this.fixtures.map((fixture: any) =>
          this.footballApiService.getfeaxtureForiD(fixture.fixture.id)
        );

        forkJoin(requests).subscribe((responses: any) => {
          console.log('Respuestas de los partidos:', responses);

          responses.forEach((response: any) => {
            if (response && response.response) {
              this.fixtureD = [...this.fixtureD, ...response.response];
            }
          });
        }, (error: any) => {
          console.log('Error al obtener detalles del partido:', error);
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



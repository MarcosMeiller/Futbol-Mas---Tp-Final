import { Component, Input, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { DetalleService } from 'src/app/services/detalle.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-team-fixture',
  templateUrl: './team-fixture.component.html',
  styleUrls: ['./team-fixture.component.css']
})
export class TeamFixtureComponent implements OnInit{
  partidosDelEquipo: any[] = [];
  liga:any;
  fixture:any;
  @Input ()
  id:any;
  

  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}
  ngOnInit() {
    this.liga = this.dataService.getLiga();
    if (this.liga && this.liga.league) {
  this.footballApiService.getFeaxture(this.liga.league.id, '2023').subscribe({
    next: (data: any) => {
      console.log(data);
      this.fixture=data.response;
      
      this.partidosDelEquipo = this.fixture.filter((fixture: any) => {
        return fixture.teams.home.id === this.id || fixture.teams.away.id === this.id;
      });
    },
    error: (error: any) => {
      console.log(error);
    }
  });
  }
 }

 mostrarInformacionPartido(idPartido:number){
  this.router.navigate([`/view-match/${idPartido}`])
}
 
}

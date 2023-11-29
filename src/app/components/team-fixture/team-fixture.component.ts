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
 
  fixture:any;
  @Input ()
  id:any;
  fromDate: Date = new Date(); 
  toDate: Date = new Date(); 

  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}
  ngOnInit() {
   
  }
  onSearchClick() {
    
    if (this.fromDate && this.toDate) {
      const fromDateString = this.fromDate.toISOString().split('T')[0]; 
      const toDateString = this.toDate.toISOString().split('T')[0];  
      this.footballApiService.getFeaxture(this.id, '2023', fromDateString, toDateString).subscribe({
        next: (data: any) => {
          console.log(data);
          this.fixture = data.response;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log('Seleccione ambas fechas');
    }
  }

 mostrarInformacionPartido(idPartido:number){
  this.router.navigate([`/view-match/${idPartido}`])
}
 

  }

import { Component,Input, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-liga-detalle',
  templateUrl: './liga-detalle.component.html',
  styleUrls: ['./liga-detalle.component.css']
})
export class LigaDetalleComponent  {
  equipos: any;
  search=''
  liga: any;
  view='events'
  
  constructor(private footballApiService: FootballApiService,private dataService: DetalleService,private router: Router) {}
  ngOnInit() {
    this.liga = this.dataService.getLiga();
    if (this.liga && this.liga.league) {
      this.footballApiService.getTeams('2023', this.liga.league.id).subscribe({
        next: (data: any) => {
          console.log(data);
          this.equipos = data.response;
        },
        error: (data: any) => {
          console.log(data);
        }
      });
    }
  }
  

  searchTeams() {
    if (this.search.trim() !== '') {
      this.footballApiService.searchTeamsByName(this.search).subscribe((res: any) => {
        console.log(res);
        this.equipos = res.response;
      });
    } else {
      this.ngOnInit();
    }
  }

  mostrarInformacionEquipo(equipo: any) {
    this.dataService.setEquipo(equipo);
    this.router.navigate(['/detalleEquipo']);
  }
  setView(name:string,event:Event){
    event.preventDefault();
    this.view=name
   }
}
  

  



  

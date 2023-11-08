import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';
@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  equipos: any;
  search=''
  constructor(private footballApiService: FootballApiService,private router: Router,private dataService: DetalleService) {}

  ngOnInit() {
    this.footballApiService.getTeams().subscribe({
      next: (data: any) => {
        console.log(data)
        this.equipos = data.response;
      },
      error: (data: any) => {
        console.log(data)
      }
    });
  }

  searchTeams(){
    this.footballApiService.search(this.search).subscribe((res:any)=>{
      console.log(res)
      this.equipos=res.response
    })
  }

  mostrarInformacionLiga(equipo: any) {
    this.dataService.setDatos(equipo);
    this.router.navigate(['/detalleEquipo']);
  }
}
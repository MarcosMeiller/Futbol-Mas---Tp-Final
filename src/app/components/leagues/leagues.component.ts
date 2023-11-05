import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  ligas: any;
  search=''
  constructor(private footballApiService: FootballApiService) {}

  ngOnInit() {
    this.footballApiService.getLeagues().subscribe({
      next: (data: any) => {
        console.log(data)
        this.ligas = data.response;
      },
      error: (data: any) => {
        console.log(data)
      }
    });
  }

  searchLeagues(){
    this.footballApiService.search(this.search).subscribe((res:any)=>{
      console.log(res)
      this.ligas=res.response
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-league',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})

export class LeaguesComponent implements OnInit {
  ligas: any;
  search='';
  ligasYEquipos:any;
  view='events';
  followedLeagues: any=[]
  loading=true
 
  constructor(private footballApiService: FootballApiService,private followLeague: FollowLeagueService,private router: Router,private dataService: DetalleService) {}

  ngOnInit() {
    this.footballApiService.getLeagues().subscribe({
      next: (data: any) => {
        this.ligas = data;
        console.log(data)
      },
      error: (data: any) => {
        
      }
    });
    this.getLeagueFollowed()

  }
  searchLeagues() {
    if (this.search.trim() !== '') {
      this.footballApiService.searchLeagueByName(this.search).subscribe((res: any) => {
        console.log(res);
        this.ligas = res.response;
      });
    } else {
      this.ngOnInit();
    }
  }

 

  getLeagueFollowed(){
    this.followLeague.getUserFollowLeague().subscribe({next: res=>{
      this.followedLeagues=res.map(item=>{return item[0].league.id})
      this.loading=false
    },error: (err)=>{console.log(err)}}
    )
  }
  validateFollow(id:string){
    console.log( this.followedLeagues.includes(id))
    return this.followedLeagues.includes(id)
  }
  
}
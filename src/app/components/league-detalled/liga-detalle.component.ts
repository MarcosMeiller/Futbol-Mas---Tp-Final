import { Component,Input, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
import { FollowServiceTeam } from 'src/app/services/followTeam.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';
@Component({
  selector: 'app-liga-detalle',
  templateUrl: './liga-detalle.component.html',
  styleUrls: ['./liga-detalle.component.css']
})
export class LigaDetalleComponent  {
  equipos: any;
  search=''
  followedTeam: any=[]
  liga: any;
  view='events'
  loading=true
  
  followleague=true
  constructor(private footballApiService: FootballApiService,private followService: FollowServiceTeam, private dataService: DetalleService,private router: Router,private followLeague: FollowLeagueService) {}
  ngOnInit() {
    this.liga = this.dataService.getLiga();
    if (this.liga && this.liga.league) {
      this.footballApiService.getTeams('2023', this.liga.league.id).subscribe({
        next: (data: any) => {
          console.log(data);
          this.equipos = data
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
        
        this.equipos = res.response;
        console.log(this.equipos);
      });
    } else {
      this.ngOnInit();
    }

  }


  setView(name:string,event:Event){
    event.preventDefault();
    this.view=name
   }

   toggleFollowLeague() {
    const leagueId = this.liga.league.id;
   
    if (this.followleague) {
      this.followLeague.UnfollowLeague(leagueId).subscribe({next:
        (res)=>console.log(res),
        error:(err)=> {
          console.log(err)
        }  
      })
    } else {
     this.followLeague.createNewFollowLeague(leagueId)
    }

    this.followleague= !this.followleague
  }


  getTeamFollowed(){
    this.followService.getUserFollowTeam().subscribe({next: res=>{
      console.log('hola')
      this.followedTeam=res.map(item=>{return item.league.id})
      this.loading=false
    },error: (err)=>{console.log(err)}}
    )
  }
  validateFollow(id:string){
    return this.followedTeam.includes(id)
  }
  
}
  

  



  

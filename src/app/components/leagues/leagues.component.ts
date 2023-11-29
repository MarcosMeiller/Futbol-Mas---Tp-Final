import { Component, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { Router } from '@angular/router'
import { DetalleService } from '../../services/detalle.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';
import { Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

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
  private searchSubject = new Subject<string>();
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
    //this.setupSearchListener();
  }
  searchLeagues() {
    console.log(this.search)
    if (this.search.trim() !== '') {
      console.log('hola')
      this.footballApiService.searchLeagueByName(this.search).subscribe({next: (res: any) => {
        console.log(res);
        this.ligas = res.response;
      }
     });
    } else {
      this.ngOnInit();
    }
  }
  private setupSearchListener() {
    this.searchSubject.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap(term => this.footballApiService.searchLeagueByName(term)),
      catchError(error => {
        console.error('Error en la búsqueda:', error);
        return [];
      })
    ).subscribe((res: any) => {
      this.ligas = res.response;
    });
  }

  
  handleSearch() {
    this.searchSubject.next(this.search);
  }

 

  getLeagueFollowed(){
    this.followLeague.getUserFollowLeague().subscribe({next: res=>{
      this.followedLeagues=res.map(item=>{return item[0].league.id})
      this.loading=false
    },error: (err)=>{console.log(err)}}
    )
  }
  validateFollow(id:string){
    return this.followedLeagues.includes(id)
  }
  
}
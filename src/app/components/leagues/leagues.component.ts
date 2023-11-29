import { Component, HostListener, OnInit } from '@angular/core';
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
  ligas: any=[]
  search='';
  ligasYEquipos:any;
  view='events';
  followedLeagues: any=[]
  loading=true

  displayedItems:any
  itemsPerPage=25
  startIndex=0

  private searchSubject = new Subject<string>();
  constructor(private footballApiService: FootballApiService,private followLeague: FollowLeagueService,private router: Router,private dataService: DetalleService) {}
 
  ngOnInit() {
    // this.footballApiService.getLeagues({startIndex: this.startIndex, endIndex: this.itemsPerPage}).subscribe({
    //   next: (data: any) => {
    //     this.ligas = data;
       
    //   },
    //   error: (data: any) => {
        
    //   }
    // });
    this.loadMoreItems()
    this.getLeagueFollowed()
   
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
 

 

  getLeagueFollowed(){
    this.followLeague.getUserFollowLeague().subscribe({next: res=>{
      console.log('hola')
      this.followedLeagues=res.map(item=>{return item.league.id})
      this.loading=false
    },error: (err)=>{console.log(err)}}
    )
  }
  validateFollow(id:string){
    return this.followedLeagues.includes(id)
  }

  loadMoreItems() {
    console.log({startIndex: this.startIndex, endIndex: this.itemsPerPage+this.startIndex})
     this.footballApiService.getLeagues({startIndex: this.startIndex, endIndex: this.itemsPerPage+this.startIndex}).subscribe({next: (res)=>{
      console.log(res)
      this.ligas = this.ligas.concat(res);
      this.startIndex += this.itemsPerPage;
    }});
    this.getLeagueFollowed()
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.loadMoreItems();
    }
  }

  private bottomReached(): boolean {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0
    );
    return scrollY + windowHeight >= documentHeight;
  }
  
}
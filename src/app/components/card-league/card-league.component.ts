import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';

@Component({
  selector: 'app-card-league',
  templateUrl: './card-league.component.html',
  styleUrls: ['./card-league.component.css'],
  animations: [
    trigger('heartAnimation', [
      state('false', style({
        color: 'black', // Color cuando está desmarcado (false)
        transform: 'scale(1)', // Escala normal
      })),
      state('true', style({
        color: 'red', // Color cuando está marcado (true)
        transform: 'scale(1)', // Escala aumentada
      })),
      transition('false <=> true', [
        animate('0.3s ease', keyframes([
          style({ color: 'black', transform: 'scale(1)', offset: 0 }),
          style({ color: 'red', transform: 'scale(1.2)', offset: 0.3 }),
          style({ transform: 'scale(1.1)', offset: 0.6 }),
          style({ transform: 'scale(1.2)', offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class CardLeagueComponent implements OnInit {

  @Input()
  league!: any;
  isFollowingLeague: { [leagueId: string]: boolean } = {};
  @Input()
  follow=true
  constructor(private followLeague: FollowLeagueService,private router: Router,private dataService: DetalleService){}

  ngOnInit(): void {
    console.log(this.follow)
  }
  toggleFollowLeague() {
    const leagueId = this.league.league.id;
   
    if (this.follow) {
      this.followLeague.UnfollowLeague(leagueId).subscribe({next:
        (res)=>console.log(res),
        error:(err)=> {
          console.log(err)
        }  
      })
    } else {
     this.followLeague.createNewFollowLeague(leagueId)
    }

    this.follow= !this.follow
  }
  mostrarInformacionLiga(liga: any) {
    this.dataService.setLiga(liga);
    this.router.navigate(['/detalleliga']);
  }
}

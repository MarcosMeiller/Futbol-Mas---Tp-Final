import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { FollowLeagueService } from 'src/app/services/follow-league.service';
import { FollowServiceTeam } from 'src/app/services/followTeam.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
  animations:[
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
  ]
})
export class TeamCardComponent {
  @Input()
  team!: any;
  isFollowingTeam: { [leagueId: string]: boolean } = {};
  @Input()
  follow=true
  constructor(private followTeam: FollowServiceTeam,private router: Router,private dataService: DetalleService){}

  ngOnInit(): void {
    console.log(this.follow)
  }
  toggleFollowTeam() {
    const teamId = this.team.team.id;
   
    if (this.follow) {
      this.followTeam.UnfollowTeam(teamId)
    } else {
     this.followTeam.createNewFollowTeam(teamId)
    }

    this.follow= !this.follow
  }
  mostrarInformacionTeam(team: any) {
    this.dataService.setEquipo(team);
    this.router.navigate(['/detalleEquipo']);
  }
}


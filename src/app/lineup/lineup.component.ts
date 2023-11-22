import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent  implements OnInit{
  @Input()
  lineups: any

  @Input()
  players: any
  playerXI:{ grid: string, id: number, name: string, number: number, pos: string, img: string, rating: string } ={grid: '', id: 0, name: '', number: 0, pos: '', img: '',rating: '' }
  homeLineup:{name:string, startXl: { grid: string, id: number, name: string, number: number, pos: string, img: string, rating: string }[]}={name:'',startXl:[]}
  awayLineUp:any

  formation=''

  numberRows=0
  numberColumns=0

  

  ngOnInit(): void {
    this.formation=this.lineups[0].formation.split('-')
   this.numberRows=this.formation.length+1
    this.homeLineup.startXl=this.lineups[0].startXI.map((item: any)=>{
      return {...this.playerXI, ...item.player}
    })

    this.homeLineup.startXl.forEach(player=>{
      const playerComplete=this.players[0].players.find((item: { player: { id: number; }; }) =>item.player.id== player.id)
      player.img=playerComplete.player.photo
      player.rating=playerComplete.statistics[0].games.rating
    })
    
    //this.homeLineup.name=this.lineups[0].team.name
    
    //this.homeLineup.startXl=this.lineups[0].startXI
/*
    console.log(this.players[0].players)
    console.log(this.lineups[0])

    this.homeLineup.startXl.forEach(item => {
      const completePlayer= this.players[0].players.find((player: { player: { id: number; }; }) => { player.player.id==item.player.id })
      item.img=completePlayer.img
      item.rating=completePlayer.rating
    });

*/
    
  }

}

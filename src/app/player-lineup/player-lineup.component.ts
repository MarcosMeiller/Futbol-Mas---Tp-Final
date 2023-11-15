import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-lineup',
  templateUrl: './player-lineup.component.html',
  styleUrls: ['./player-lineup.component.css']
})
export class PlayerLineupComponent implements OnInit{

  @Input()
  player : {name: string, img: string, grid: string, rating:string}= {name:'', img: '', grid: '', rating:''}
  
  ngOnInit(): void {
    
  }
  

 

  
}

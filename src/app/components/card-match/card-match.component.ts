import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css']
})
export class CardMatchComponent implements OnInit{
  @Input()
  match:any

  constructor(private route : Router){}

  ngOnInit(): void {
    
  }
  mostrarInfoPartido(id:number){
    this.route.navigate([`/view-match/${id}`])
  }
}

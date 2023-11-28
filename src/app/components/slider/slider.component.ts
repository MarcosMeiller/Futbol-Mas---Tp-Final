import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out')
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class SliderComponent implements OnInit{
  @Input()
  data!: any[];
  cols=4
  currentStartIndex=0
  dataSlider: any[] = [];
  end=false
  start=true
  animationDirection=''
  fadeAnimationState=''
  @ContentChild('contentTemplate')
  contentTemplate!: TemplateRef<any>; // Nombre de referencia al template

  ngOnInit(): void {
    console.log(this.data)
    this.dataSlider=[...this.data.slice(this.currentStartIndex,this.currentStartIndex+ this.cols)]
    console.log(this.data.length)
    if(this.cols>=this.data.length)
    {
      this.end=true
    }
  }
  rigthSlide(){
    this.fadeAnimationState = 'out';
  setTimeout(() => {
    this.animationDirection = 'in';
    this.fadeAnimationState = 'in';
    // Resto del código
  }, 500);
    this.start=false
    this.currentStartIndex+=this.cols
    this.dataSlider= [...this.data.slice(this.currentStartIndex,this.currentStartIndex+ this.cols)]
    if(this.currentStartIndex+this.cols>=this.data.length)
    {
      this.end=true
    }
    console.log(this.dataSlider)
    
    //this.currentStartIndex+=this.cols
  }
  leftSlide(){
    this.fadeAnimationState = 'out';
  setTimeout(() => {
    this.animationDirection = 'in';
    this.fadeAnimationState = 'in';
    // Resto del código
  }, 500);
    this.end=false
    this.currentStartIndex-=this.cols
    this.dataSlider= [...this.data.slice(this.currentStartIndex, this.currentStartIndex+ this.cols)]
    if(this.currentStartIndex==0){
      this.start=true
    }
    //this.currentStartIndex+=this.cols
  }

}

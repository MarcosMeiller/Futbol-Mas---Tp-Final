import { Component, Input, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/services/prediction.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-prediction-all-component',
  templateUrl: './prediction-all.component.html',
  styleUrls: ['./prediction-all.component.css']
})
export class PredictionAllComponent implements OnInit {
  @Input()
  matchId = 0
  allPredictions: any[] = [];
  topPredictions: any[] = [];

  constructor(private predictionService: PredictionService, private router: Router) { }

  ngOnInit() {
    this.getAllPredictions();
    this.getTopPredictions();
  }

  getAllPredictions() {
    this.predictionService.getAllPredictions(this.matchId).subscribe(
      (predictions: any) => {
        this.allPredictions = predictions;
      },
      error => {
        console.error('Error getting all predictions', error);
      }
    );
  }

  getTopPredictions() {
    this.predictionService.getTopPredictions(this.matchId).subscribe(
      (topPredictions: any) => {
        this.topPredictions = topPredictions.topPredictions;
      },
      error => {
        console.error('Error getting top predictions', error);
      }
    );
  }

  navigateToCreatePrediction(){
    this.router.navigate(['/prediction-match', this.matchId]);
  }
}

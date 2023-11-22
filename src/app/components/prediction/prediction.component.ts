import { Component, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/services/prediction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prediction-component',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  matchId: number = 0;
  homeScore: number = 0;
  awayScore: number = 0;

  constructor(private predictionService: PredictionService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.matchId=Number(this.route.snapshot.paramMap.get('id'))
    }

  onSubmit() {
    const predictionData = {
      matchId: this.matchId,
      homeScore: this.homeScore,
      awayScore: this.awayScore
    };

    this.predictionService.createPrediction(predictionData);
  }

}

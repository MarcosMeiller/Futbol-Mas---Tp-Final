import { Component, Input, OnInit } from '@angular/core';
import { PredictionService } from 'src/app/services/prediction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-prediction-component',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit{

  @Input()
  matchId = 0;
  homeScore = 0;
  awayScore = 0;
  allPredictions: any[] = [];
  topPredictions: any[] = [];
  homeTeam: any
  awayTeam: any

  constructor(private predictionService: PredictionService,private matchService: MatchService,  private router: Router) { }

  ngOnInit() {
    this.getAllPredictions();
    this.getTopPredictions();
    this.homeTeam=this.matchService.getLocalTeam()
    this.awayTeam=this.matchService.getAwayTeam()
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
  onSubmit() {
    const predictionData = {
      matchId: this.matchId,
      homeScore: this.homeScore,
      awayScore: this.awayScore
    };
    this.allPredictions.push(predictionData)
    this.predictionService.createPrediction(predictionData);
  }

}

import { Component, OnInit } from '@angular/core';
import { FollowService } from '../../services/follow-service.service'; 
import { Follow } from '../../models/follow.model'; 
import { FollowServiceTeam } from 'src/app/services/followTeam.service';
@Component({
  selector: 'app-view-follow',
  templateUrl: './view-follow.component.html',
  styleUrls: ['./view-follow.component.css']
})
export class ViewFollowComponent implements OnInit {
  follows: Follow[] = [];

  constructor(private followService: FollowService,private followTeam: FollowServiceTeam) {}

  ngOnInit(): void {
    this.followService.getUserFollows().subscribe((data) => {
      this.follows = data;
      console.log(this.follows)
    });
  }

  UnfollowTeam(team:any){
    
this.followTeam.UnfollowTeam(team);

  }
}
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievement-detail',
  templateUrl: './achievement-detail.component.html',
  styleUrls: ['./achievement-detail.component.css']
})
export class AchievementDetailComponent implements OnInit {

  achievement: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAchievement();
  }

  getAchievement(): void {
    this.achievement = this.route.snapshot.paramMap.get('name');
  }

  goBack(): void {
    this.location.back();
  }
}

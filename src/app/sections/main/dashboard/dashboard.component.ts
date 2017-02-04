import { Component, OnInit } from '@angular/core';
import { ExperimentCard } from '../../shared/models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public fakeCards: ExperimentCard[];

  constructor() { }

  ngOnInit() {
    this.fakeCards = [
      {
        id: 1,
        experimentName: 'Experiment #1',
        shortDescription: 'Experiment short description',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus hic mollitia quibusdam? Architecto autem cupiditate facilis quisquam soluta vero?'
      },
      {
        id: 2,
        experimentName: 'Experiment #2',
        shortDescription: 'Experiment short description',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus hic mollitia quibusdam? Architecto autem cupiditate facilis quisquam soluta vero?'
      },
      {
        id: 3,
        experimentName: 'Experiment #3',
        shortDescription: 'Experiment short description',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus hic mollitia quibusdam? Architecto autem cupiditate facilis quisquam soluta vero?'
      }
    ];
  }

}

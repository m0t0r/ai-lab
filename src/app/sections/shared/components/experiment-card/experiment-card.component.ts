import { Component, Input } from '@angular/core';
import { ExperimentCard } from '../../models/models';

@Component({
  selector: 'experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.scss']
})
export class ExperimentCardComponent {
  @Input() data: ExperimentCard;

  constructor() { }
}

import { Component, Input } from '@angular/core';
import { Bug } from '../models/bug';

@Component({
  selector: 'app-bug-stats',
  templateUrl: './bug-stats.component.html',
  styleUrls: ['./bug-stats.component.css']
})
export class BugStatsComponent {

  @Input('data')
  bugs : Bug[] = []
}

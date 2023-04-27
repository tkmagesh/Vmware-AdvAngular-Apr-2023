import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/bug';

@Pipe({
  name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {

  transform(bugs: Bug[] | undefined): number {
    // console.log('closedCount pipe triggered')
    return bugs && bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0) || 0
  }

}

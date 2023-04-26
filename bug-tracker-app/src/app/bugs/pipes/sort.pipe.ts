import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T> implements PipeTransform {

  private getComparer(attrName : keyof(T)) : (x : T, y : T) => number {
    return (x: T, y: T) => {
      if (x[attrName] < y[attrName]) return -1
      if (x[attrName] > y[attrName]) return 1
      return 0
    }
  }

  private getDescComparer(comparer: (x: T, y: T) => number): (x: T, y: T) => number {
    return (x: T, y: T) => comparer(x,y) * -1
  }

  transform(data : Array<T>, attrName : keyof(T), isDesc : boolean): Array<T> {
    let comparer = this.getComparer(attrName)
    if (isDesc) {
      comparer = this.getDescComparer(comparer)
    }
    return data.sort(comparer)
  }
  

}

import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {

  constructor() { }

  createNew(newBugId : number, newBugName : string) : Bug {
    const newBug: Bug = {
      id: newBugId,
      name: newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    return newBug;
  }

  toggle(bugToToggle : Bug) {
    bugToToggle.isClosed = !bugToToggle.isClosed
  }
}

import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {

  constructor() { }

  createNew(newBugName : string) : Bug {
    const newBug: Bug = {
      id: 0,
      name: newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    return newBug;
  }

  toggle(bugToToggle : Bug) : Bug {
    return { ...bugToToggle, isClosed : !bugToToggle.isClosed}
  }
}

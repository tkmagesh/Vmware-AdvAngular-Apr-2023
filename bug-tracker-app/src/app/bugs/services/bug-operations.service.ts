import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';
import { BugStorageService } from './bug-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {

  public bugs: Bug[] = [];

  constructor(private bugStorage : BugStorageService) { }

  createNew(newBugName : string) : Bug {
    const newBug: Bug = {
      id: 0,
      name: newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.bugStorage.save(newBug)
    this.bugs = [...this.bugs, newBug]
    return newBug;
  }

  toggle(bugToToggle : Bug) {
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    this.bugStorage.save(toggledBug)
    this.bugs = this.bugs.map(b => b.id === bugToToggle.id ? toggledBug : b)
  }

  load(){
    this.bugs = this.bugStorage.getAll()
  }

  remove(bugToRemove : Bug){
    this.bugStorage.remove(bugToRemove)
    this.bugs = this.bugs.filter(b => b.id !== bugToRemove.id)
  }

  removeClosed(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
    closedBugs.forEach(cb => this.bugStorage.remove(cb))
  }
}

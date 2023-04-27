import { Inject, Injectable } from '@angular/core';
import { Bug } from '../models/bug';
import { LOCAL_STORAGE } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class BugStorageService {
  // private storage = window.localStorage
  private currentBugId : number = 0

  constructor(@Inject(LOCAL_STORAGE) private storage: Storage) {

  }

  getAll(): Bug[] {
    let bugs : Bug[] = [];
    for (let i = 0; i < this.storage.length; i++){
      const key = this.storage.key(i);
      if (key && key.startsWith('bug-')){
        const bugJSON = this.storage.getItem(key) || ''
        const bug = JSON.parse(bugJSON)
        this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id
        bugs.push(bug)
      }
    }
    return bugs
  }

  save(bug : Bug) {
    if (bug.id === 0) { //new bug 
      bug.id = ++this.currentBugId
    }
    const bugJSON = JSON.stringify(bug)
    this.storage.setItem(`bug-${bug.id}`, bugJSON)
  }

  remove(bug : Bug){
    this.storage.removeItem(`bug-${bug.id}`)
  }
}

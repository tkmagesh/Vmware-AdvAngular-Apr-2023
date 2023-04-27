import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';
import { BugStorageService } from './bug-storage.service';
import { BugApiService } from './bug-api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BugOperationsService {

  private bugs: Bug[] = [];

  private bugsSubject = new BehaviorSubject<Bug[]>(this.bugs);
  public bugs$ = this.bugsSubject.asObservable();

  constructor(private bugApi: BugApiService) {

  }

  load() {
    const bugs$ = this.bugApi.getAll()
    bugs$.subscribe(bugs => {
      this.bugs = bugs
      this.bugsSubject.next(this.bugs)
    })
  }

  createNew(newBugName: string) {
    const newBugData: Bug = {
      id: 0,
      name: newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.bugApi.save(newBugData)
      .subscribe(newBug => {
        this.bugs = [...this.bugs, newBug]
        this.bugsSubject.next(this.bugs)
      })

  }

  toggle(bugToToggle: Bug) {
    const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed }
    this.bugApi.save(toggledBugData)
      .subscribe(toggledBug => {
        this.bugs = this.bugs.map(b => b.id === bugToToggle.id ? toggledBug : b)
        this.bugsSubject.next(this.bugs)
      })

  }

  remove(bugToRemove: Bug) {
    this.bugApi.remove(bugToRemove)
      .subscribe(() => {
        this.bugs = this.bugs.filter(b => b.id !== bugToRemove.id)
        this.bugsSubject.next(this.bugs)
      })

  }

  removeClosed() {
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
    closedBugs.forEach(cb => this.remove(cb))
  }

}

/* 
export class BugOperationsService {

  public bugs: Bug[] = [];
  
  constructor(private bugApi : BugApiService){

  }

  load(){
    const bugs$ = this.bugApi.getAll()
    bugs$.subscribe(bugs => this.bugs = bugs)
  }

  createNew(newBugName: string) {
    const newBugData: Bug = {
      id: 0,
      name: newBugName,
      isClosed: false,
      createdAt: new Date()
    }
    this.bugApi.save(newBugData)
      .subscribe(newBug => this.bugs = [...this.bugs, newBug])
    
  }

  toggle(bugToToggle: Bug) {
    const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed }
    this.bugApi.save(toggledBugData)
      .subscribe(toggledBug => 
        this.bugs = this.bugs.map(b => b.id === bugToToggle.id ? toggledBug : b)
      )
    
  }

  

  remove(bugToRemove: Bug) {
    this.bugApi.remove(bugToRemove)
      .subscribe(() => this.bugs = this.bugs.filter(b => b.id !== bugToRemove.id))
    
  }

  removeClosed() {
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
    closedBugs.forEach(cb => this.remove(cb)) 
  }

} */



// localStorage
/* export class BugOperationsService {

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
 */
import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bug-operations.service';
import { BugStorageService } from './services/bug-storage.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit{

  
  bugs : Bug[] = []
  

  bugSortAttrName : string = ''
  bugSortDesc : boolean = false

  constructor(
    private bugStorage : BugStorageService,
    private bugOperations : BugOperationsService){

  }

  ngOnInit(): void {
    this.bugs = this.bugStorage.getAll()
  }

  //event handler function for the bugCreate event of the BugEdit component
  onBugCreate(newBugName: string) {
    const newBug = this.bugOperations.createNew(newBugName)
    this.bugStorage.save(newBug)
    this.bugs = [ ...this.bugs, newBug]
  }

  onBugNameClick(bugToToggle: Bug) {
    const toggledBug = this.bugOperations.toggle(bugToToggle)
    this.bugStorage.save(toggledBug)
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    
    this.bugStorage.remove(bugToRemove)
    this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
  }

  onBtnRemoveClosedClick(){
    const closedBugs = this.bugs.filter(bug => bug.isClosed)
    this.bugs = this.bugs.filter(bug => !bug.isClosed)
    closedBugs.forEach(cb => this.bugStorage.remove(cb))
  }
/* 
  getClosedBugsCount() : number {
    console.log('getClosedBugsCount triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  } */
}

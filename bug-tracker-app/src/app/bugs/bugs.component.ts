import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bug-operations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit{
  
  bugs : Bug[] = []
  newBugName : string = ''

  bugSortAttrName : string = ''
  bugSortDesc : boolean = false

  constructor(private bugOperations : BugOperationsService){

  }

  ngOnInit(): void {
    this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date('10-Mar-2023')})
    this.bugs.push({ id: 2, name: 'Application not responding', isClosed: true, createdAt: new Date('10-Feb-2023') })
    this.bugs.push({ id: 3, name: 'User actions not recognized', isClosed: false, createdAt: new Date('10-Jan-2023') })
    this.bugs.push({ id: 4, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date('10-Apr-2023') })
  }

  onAddNewClick(){
    const newBugId = this.bugs.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1
    const newBug = this.bugOperations.createNew(newBugId, this.newBugName)
    this.bugs.push(newBug)
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    const idx = this.bugs.indexOf(bugToRemove)
    this.bugs.splice(idx, 1)
  }

  onBtnRemoveClosedClick(){
    for (let i = this.bugs.length-1; i >= 0; i--){
      if (this.bugs[i].isClosed){
        this.bugs.splice(i, 1)
      }
    }
  }

  getClosedBugsCount() : number {
    // console.log('getClosedBugsCount triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }
}

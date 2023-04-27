import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bug-operations.service';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit{

  bugSortAttrName : string = '';
  bugSortDesc : boolean = false;

  constructor(public bugOperations : BugOperationsService){
  }

  ngOnInit(): void {
    this.bugOperations.load()
  }

  onBugCreate(newBugName: string) {
    this.bugOperations.createNew(newBugName)
  }

  onBugNameClick(bugToToggle: Bug) {
    this.bugOperations.toggle(bugToToggle)
  }

  onBtnRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove)
  }

  onBtnRemoveClosedClick(){
    this.bugOperations.removeClosed()
  }
}

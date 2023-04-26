import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent {
  newBugName: string = ''

  @Output()
  bugCreate : EventEmitter<string> = new EventEmitter<string>()

  onAddNewClick() {
    this.bugCreate.emit(this.newBugName)
  }
}

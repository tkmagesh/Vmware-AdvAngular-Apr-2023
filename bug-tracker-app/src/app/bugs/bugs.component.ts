import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit{
  
  bugs : Bug[] = []

  ngOnInit(): void {
    this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date('10-Mar-2023')})
    this.bugs.push({ id: 2, name: 'Application not responding', isClosed: true, createdAt: new Date('10-Feb-2023') })
    this.bugs.push({ id: 3, name: 'User actions not recognized', isClosed: false, createdAt: new Date('10-Jan-2023') })
    this.bugs.push({ id: 4, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date('10-Apr-2023') })
  }
}

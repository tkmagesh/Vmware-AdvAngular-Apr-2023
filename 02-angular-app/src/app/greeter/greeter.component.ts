import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  message : string = '[Default greet message]'
  userName : string = '';

  constructor(){
    /* 
    setTimeout(() => {
      this.message = '5 seconds elapsed'
    }, 5000); 
    */
  }

  onBtnGreetClick() {
    this.message = `Hi ${this.userName}, Have a nice day!`
  }
}

import { Component, Inject } from '@angular/core';
import { APP_NAME_TOKEN } from '../shared/appInfo';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  message : string = '[Default greet message]'
  userName : string = '';

  constructor(@Inject(APP_NAME_TOKEN) public appName : string){
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

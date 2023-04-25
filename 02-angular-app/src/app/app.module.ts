import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

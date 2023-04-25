import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salaryCalculator.model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salaryCalculatorV2.model';

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
  providers: [
    // SalaryCalculatorModel
    // {provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel}
    { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModelV2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

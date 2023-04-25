import { Component } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculator.model';
import { SalaryCalculatorModelV2 } from './salaryCalculatorV2.model';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css'],
  /* providers : [
    {provide : SalaryCalculatorModel, useClass : SalaryCalculatorModelV2}
  ] */
})
export class SalaryCalculatorComponent {
  
  // violation of Dependency Inversion Principle
  // model : SalaryCalculatorModel = new SalaryCalculatorModel()

  constructor(public model : SalaryCalculatorModel){

  }
  
}

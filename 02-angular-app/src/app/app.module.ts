import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salaryCalculator.model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salaryCalculatorV2.model';
import { APP_NAME, APP_NAME_TOKEN } from './shared/appInfo';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // SalaryCalculatorModel
    // {provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel}
    // { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModelV2 }
    // {provide : SalaryCalculatorModel, useValue : model}
    { provide : SalaryCalculatorModel, useFactory : salaryCalculatorModelFactory},
    { provide : APP_NAME_TOKEN, useValue : APP_NAME}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//useValue
// const model = new SalaryCalculatorModelV2()

//useFactory
function salaryCalculatorModelFactory() {
  const model = new SalaryCalculatorModelV2()
  return model;
}
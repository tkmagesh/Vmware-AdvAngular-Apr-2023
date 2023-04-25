import { SalaryCalculatorModel } from "./salaryCalculator.model";

/* 
export class SalaryCalculatorModelV2 extends SalaryCalculatorModel {
    override calculate(): void {
        super.calculate()
        this.salary += 1000
    }
} 
*/

export class SalaryCalculatorModelV2 {
    basic = 0
    hra = 0
    da = 0
    tax = 0
    salary = 0

    calculate(){
        let gross = this.basic + this.hra + this.da,
            net = gross * ((100-this.tax)/100) + 2000
        this.salary = net;
    }
}
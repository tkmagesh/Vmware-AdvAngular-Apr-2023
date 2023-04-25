export class SalaryCalculatorModel {
    //state
    basic = 0;
    hra = 0;
    da = 0;
    tax = 0;
    salary = 0;

    //behavior
    calculate() {
        let gross = this.basic + this.hra + this.da,
            net = gross * ((100 - this.tax) / 100);
        this.salary = net;
    }
}
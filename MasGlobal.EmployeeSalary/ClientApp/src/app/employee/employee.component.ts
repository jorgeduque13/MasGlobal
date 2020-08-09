import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({  
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  //public forecasts: WeatherForecast[];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}
  public employees: IEmployee[] = [{
    "id": "1",
    "name": "Juan",
    "contractTypeName": "HourlySalaryEmployee",
    "roleId": 1,
    "roleName": "Administrator",
    "roleDescription": null,
    "hourlySalary": 60000,
    "monthlySalary": 80000,
    "annualSalary": 86400000
  },
  {
    "id": "2",
    "name": "Sebastian",
    "contractTypeName": "MonthlySalaryEmployee",
    "roleId": 2,
    "roleName": "Contractor",
    "roleDescription": null,
    "hourlySalary": 60000,
    "monthlySalary": 80000,
    "annualSalary": 960000
  }];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<IEmployee[]>(baseUrl + 'api/EmployeeAnnualSalary/WeatherForecasts').subscribe(result => {
  //    this.employees = result;
  //  }, error => console.error(error));
  //}
}

export interface IEmployee {
  id: string,
  name: string,
  contractTypeName: string;
  roleId: number,
  roleName: string,
  roleDescription: string,
  hourlySalary: number,
  monthlySalary: number,
  annualSalary: number
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interface/i-employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  //public forecasts: WeatherForecast[];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}
  public employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<IEmployee[]>(baseUrl + 'api/EmployeeAnnualSalary/WeatherForecasts').subscribe(result => {
  //    this.employees = result;
  //  }, error => console.error(error));
  //}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  onSubmit() {
    this.employees = this.employeeService.getEmployees();    
  }

}



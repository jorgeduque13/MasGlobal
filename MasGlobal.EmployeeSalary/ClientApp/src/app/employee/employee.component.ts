import { Component, Inject, OnInit } from '@angular/core';
import { IEmployee } from '../interface/i-employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

      public clickEvent: boolean = false;
      public errorMessage: string = '';
      public employees: IEmployee[] = [];

      constructor(private employeeService: EmployeeService) {
      }

      calculateAnnualSalary(): void {
        this.clickEvent = !this.clickEvent;
      }

      //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      //  http.get<IEmployee[]>(baseUrl + 'api/EmployeeAnnualSalary/WeatherForecasts').subscribe(result => {
      //    this.employees = result;
      //  }, error => console.error(error));
      //}

      //ngOnInit() {
      //  this.employees = this.employeeService.getEmployees();
      //}

      ngOnInit() {
        this.employeeService.getEmployees().subscribe({
          next: employees => {
            this.employees = employees;
          },
          error: err => this.errorMessage = err
        });
      } 
}



import { Component, Inject, OnInit } from '@angular/core';
import { IEmployee } from '../interface/i-employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

      public clickEvent: boolean = false;
      public errorMessage: string = '';
      public _listFilter = '';
      public _employeId: string = '';

      get employeId(): string {
        return this._employeId;
      }      

      get listFilter(): string {
        return this._listFilter;
      }
      set listFilter(value: string) {
        this._listFilter = value;        
      }
      
      public employees: IEmployee[] = [];      

      constructor(private employeeService: EmployeeService) {
      }

    calculateAnnualSalary(): void {      
      this.employees = [];      

      if (this._employeId == '') {
          this.employeeService.getEmployees().subscribe({
            next: employees => {
              this.employees = employees;              
            },
            error: err => this.errorMessage = err
          });
        }
        else {
          this.employeeService.getEmployeeById(this._employeId).subscribe({
            next: employee => {
              this.employees[0] = employee;              
            },
            error: err => this.errorMessage = err
          });
        }
        this.clickEvent = !this.clickEvent;
      }
      
      ngOnInit() {
      } 
}



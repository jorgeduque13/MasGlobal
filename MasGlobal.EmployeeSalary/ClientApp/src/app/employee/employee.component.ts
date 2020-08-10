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
      get listFilter(): string {
        return this._listFilter;
      }
      set listFilter(value: string) {
        this._listFilter = value;
        this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
      }
      public filteredEmployees: IEmployee[] = [];
      public employees: IEmployee[] = [];

      constructor(private employeeService: EmployeeService) {
      }

      performFilter(filterBy: string): IEmployee[] {
        return this.employees.filter((employee: IEmployee) =>
          employee.id.indexOf(filterBy) !== -1);
      }

      calculateAnnualSalary(): void {
        this.clickEvent = !this.clickEvent;
      }
      
      ngOnInit() {
        this.employeeService.getEmployees().subscribe({
          next: employees => {
            this.employees = employees;
            this.filteredEmployees = this.employees;
          },
          error: err => this.errorMessage = err
        });
      } 
}



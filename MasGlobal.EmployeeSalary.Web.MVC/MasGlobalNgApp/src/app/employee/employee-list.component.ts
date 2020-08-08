import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'es-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeComponent implements OnInit{ 
    pageTittle: string = 'Employee List';
    clickEvent: boolean = false;
    errorMessage: string = '';
    _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;    
        this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
    }
    filteredEmployees: IEmployee[] = [];
    employees: IEmployee[] = [];

      constructor(private employeeService: EmployeeService){                    
      }

      performFilter(filterBy: string): IEmployee[] {        
        return this.employees.filter((employee: IEmployee) =>
          employee.id.indexOf(filterBy) !== -1);
      }

      calculateAnnualSalary(): void{
          this.clickEvent = !this.clickEvent;
      }      
      
      ngOnInit(): void{
          this.employeeService.getEmployees().subscribe({
              next: employees => {
                  this.employees = employees;
                  this.filteredEmployees = this.employees;
                },
              error: err => this.errorMessage = err
          });         
      }      
}
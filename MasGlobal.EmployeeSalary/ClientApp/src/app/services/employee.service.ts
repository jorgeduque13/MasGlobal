import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IEmployee } from '../interface/i-employee';

@Injectable()

export class EmployeeService {

  API_URL: String;
  httpOptions: any = {};

  private employeeUrl = 'api/EmployeeAnnualSalary';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl + this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }

  //getEmployees(): IEmployee[] {
  //  return [{
  //    "id": "1",
  //    "name": "Juan",
  //    "contractTypeName": "HourlySalaryEmployee",
  //    "roleId": 1,
  //    "roleName": "Administrator",
  //    "roleDescription": null,
  //    "hourlySalary": 60000,
  //    "monthlySalary": 80000,
  //    "annualSalary": 86400000
  //  },
  //  {
  //    "id": "2",
  //    "name": "Sebastian",
  //    "contractTypeName": "MonthlySalaryEmployee",
  //    "roleId": 2,
  //    "roleName": "Contractor",
  //    "roleDescription": null,
  //    "hourlySalary": 60000,
  //    "monthlySalary": 80000,
  //    "annualSalary": 960000
  //  }];
  //}
}

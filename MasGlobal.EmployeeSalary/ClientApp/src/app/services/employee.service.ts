import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';
import { IEmployee } from '../interface/i-employee';

@Injectable()

export class EmployeeService {

  API_URL: String;
  httpOptions: any = {};
  //private employeeUrl = '/EmployeeAnnualSalary';

  //constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  //}

  //getEmployees(): Observable<IEmployee[]> {
  //  return this.http.get<IEmployee[]>(this.baseUrl + this.employeeUrl).pipe(
  //    tap(data => console.log('All: ' + JSON.stringify(data)))
  //  );
  //}

  getEmployees(): IEmployee[] {
    return [{
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
  }

  //private handleError(err: HttpErrorResponse) {
  //  // in a real world app, we may send the server to some remote logging infrastructure
  //  // instead of just logging it to the console
  //  let errorMessage = '';
  //  if (err.error instanceof ErrorEvent) {
  //    // A client-side or network error occurred. Handle it accordingly.
  //    errorMessage = `An error occurred: ${err.error.message}`;
  //  } else {
  //    // The backend returned an unsuccessful response code.
  //    // The response body may contain clues as to what went wrong,
  //    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //  }
  //  console.error(errorMessage);
  //  return throwError(errorMessage);
  //}
}

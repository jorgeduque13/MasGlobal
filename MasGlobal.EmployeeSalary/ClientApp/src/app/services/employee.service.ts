import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IEmployee } from '../interface/i-employee';

@Injectable()

export class EmployeeService {

  API_URL: String;
  httpOptions: any = {};

  private employeeApiUrl = 'api/EmployeeAnnualSalary';
  private employeeApiUrlById = 'api/EmployeeAnnualSalary/';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getEmployeeById(searchId: string): Observable<IEmployee> {    
    return this.http.get<IEmployee>(this.baseUrl + this.employeeApiUrlById + searchId).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))));    
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl + this.employeeApiUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'es-root',
  template: 
    `<div><h1>{{title}}</h1>
      <div>
       <es-employee></es-employee>
      </div>
    </div>`
})
export class AppComponent {
  title = 'Employee Annual Salary Calculator';
}

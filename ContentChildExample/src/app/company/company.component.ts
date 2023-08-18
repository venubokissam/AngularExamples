import { Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companyName: string = "Google";
  
  @ContentChild(EmployeeComponent)
  empDemo: EmployeeComponent = new EmployeeComponent;

  OnClickMeClicked(){ // 2
    this.empDemo.empName="Johnny";
  }
  constructor(){

  }
}

import { Component, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companyName: string = "Google";
  
  @ViewChild(EmployeeComponent)
  empDemo: EmployeeComponent = new EmployeeComponent;

  OnClickMeClicked(){
    this.empDemo.empName="Johnny"; // 2
  }
  constructor(){

  }
}

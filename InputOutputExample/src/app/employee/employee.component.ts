import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  @Input() getCompanyInfo : string = ""; // 4 

  constructor(){

  }
  
}

import { Component, ContentChild, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  companyName: string = "Google";
  
  @ContentChildren(EmployeeComponent)
  empDemo !: QueryList<EmployeeComponent>;

  OnClickMeClicked(){
    var a = this.empDemo.toArray();
    for(var i=0; i<a.length; i++) {
      a[i].empName="Johnny"; // 2
    }
  }
  constructor(){

  }
}

import { Component, OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  //@Input() companyName = "";

  @Input() message = '';

  constructor(){ // 1
    console.log("Constructor");
  }
  
  ngOnChanges(changes: SimpleChanges){ // 2
    console.log(changes  + "ngOnChanges");
    for (let propName in changes) { 
      let change = changes[propName];
      console.log(change);
    }
  }

  ngOnInit(){ //3
    console.log("ngOnInit");
  }

  ngDoCheck(){ //4
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){ //5
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){ //6
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){ //7
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){ //8
    console.log("ngAfterViewChecked");
  }

  ngOnDestory(){ //9
    console.log("ngOnDestory");
  }
}

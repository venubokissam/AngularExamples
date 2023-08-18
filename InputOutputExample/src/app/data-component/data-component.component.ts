import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent { // 4
 
  listOfPeople: string[] = ['Joey', 'John', 'James']; //5

  @Output() buttonWasClicked = new EventEmitter<string[]>(); //6

  onButtonClick() { // 7   // 10(button click) 
    this.buttonWasClicked.emit(this.listOfPeople); // 11
}

}

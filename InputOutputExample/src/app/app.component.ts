import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { // 1
  message: string = ""
  data: string[] = []  
  
  buttonInChildComponentWasClicked(dataFromChild: string[]) { // 14
      this.message = 'The button in the child component was clicked';
      this.data = dataFromChild;
  }
}

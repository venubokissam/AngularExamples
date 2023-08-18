import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDelhiComponent } from '../new-delhi/new-delhi.component';
import { NewMumbaiComponent } from '../new-mumbai/new-mumbai.component';


@NgModule({
  declarations: [NewDelhiComponent,NewMumbaiComponent],
  exports:[NewDelhiComponent,NewMumbaiComponent],
  imports: [
    CommonModule
  ]
})
export class IndiaModuleModule { }

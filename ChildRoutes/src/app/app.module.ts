import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = 
[
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'second',
        component: SecondComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { IndiaModuleModule } from './india-module/india-module.module';
import { useAnimation } from '@angular/animations';
import { UsaModuleModule } from './usa-module/usa-module.module';



@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,IndiaModuleModule,UsaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {DataTableModule} from 'primeng/datatable';
import { ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, 
  DataTableModule,TableModule, DropdownModule, ReactiveFormsModule,DialogModule,ButtonModule,NgxChartsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

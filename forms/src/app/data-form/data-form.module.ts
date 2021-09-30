import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class DataFormModule { }

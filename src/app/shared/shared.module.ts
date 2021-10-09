import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

const MODULES = [
  CommonModule,
  MaterialModule,
  HttpClientModule,
]

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }

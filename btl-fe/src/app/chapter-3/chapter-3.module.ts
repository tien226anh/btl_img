import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { Chapter3Component } from './chapter-3.component';



@NgModule({
  declarations: [Chapter3Component],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class Chapter3Module { }

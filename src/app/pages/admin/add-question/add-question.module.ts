import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddQuestionRoutingModule } from './add-question-routing.module';
import { AddQuestionComponent } from './add-question.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    
  ],
  exports: [
    
  ],
  imports: [
    //CommonModule,
    AddQuestionRoutingModule,
    MaterialModule
  ]
})
export class AddQuestionModule { }

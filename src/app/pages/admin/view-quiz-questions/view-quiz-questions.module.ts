import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewQuizQuestionsRoutingModule } from './view-quiz-questions-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ViewQuizQuestionsComponent } from './view-quiz-questions.component';


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    ViewQuizQuestionsRoutingModule,
    MaterialModule,
  ]
})
export class ViewQuizQuestionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadQuizRoutingModule } from './load-quiz-routing.module';
import { LoadQuizComponent } from './load-quiz.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    LoadQuizRoutingModule,
  ]
})
export class LoadQuizModule { }

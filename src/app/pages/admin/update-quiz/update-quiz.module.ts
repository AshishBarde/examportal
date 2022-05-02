import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';


import { UpdateQuizRoutingModule } from './update-quiz-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { UpdateQuizComponent } from './update-quiz.component';


@NgModule({
  declarations: [],
  imports: [
    UpdateQuizRoutingModule,
  ]
})
export class UpdateQuizModule { }

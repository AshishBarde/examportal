import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuizQuestionsComponent } from './view-quiz-questions.component';

const routes: Routes = [{ 
  path: '', 
  component: ViewQuizQuestionsComponent            
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewQuizQuestionsRoutingModule { }

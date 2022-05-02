import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../../profile/profile.component';
import { AddCategoriesComponent } from '../add-categories/add-categories.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { UpdateQuizComponent } from '../update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from '../view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from '../view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from '../view-quizzes/view-quizzes.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
   { path: '', component: DashboardComponent },
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

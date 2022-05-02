import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProfileComponent } from '../../profile/profile.component';
import { ViewCategoriesComponent } from '../view-categories/view-categories.component';
import { AddCategoriesComponent } from '../add-categories/add-categories.component';
import { ViewQuizzesComponent } from '../view-quizzes/view-quizzes.component';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { UpdateQuizComponent } from '../update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from '../view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { UpdateQuizModule } from '../update-quiz/update-quiz.module';
import { ViewQuizzesModule } from '../view-quizzes/view-quizzes.module';
import { ViewCategoriesModule } from '../view-categories/view-categories.module';
import { AddQuizModule } from '../add-quiz/add-quiz.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProfileModule } from '../../profile/profile.module';

@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    SidebarComponent
  ],
  imports: [
    //CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    UpdateQuizModule,
    ViewQuizzesModule,
    ViewCategoriesModule,
    AddQuizModule,
    ProfileModule
  ],
  exports:[]
})
export class DashboardModule { }

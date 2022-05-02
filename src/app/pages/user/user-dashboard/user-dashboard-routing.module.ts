import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from '../instructions/instructions.component';
import { LoadQuizComponent } from '../load-quiz/load-quiz.component';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:UserDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadQuizComponent } from './load-quiz.component';

const routes: Routes = [
  {
    path:'',
    component:LoadQuizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadQuizRoutingModule { }

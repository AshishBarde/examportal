import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuizzesComponent } from './view-quizzes.component';

const routes: Routes = [{ 
  path: '', 
  component: ViewQuizzesComponent            
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewQuizzesRoutingModule { }

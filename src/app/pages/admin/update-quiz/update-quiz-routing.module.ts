import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateQuizComponent } from './update-quiz.component';

const routes: Routes = [{ 
  path: '', 
  component: UpdateQuizComponent            
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateQuizRoutingModule { }

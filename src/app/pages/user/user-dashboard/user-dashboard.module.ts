import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { LoadQuizComponent } from '../load-quiz/load-quiz.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { LoadQuizModule } from '../load-quiz/load-quiz.module';
import { InstructionsModule } from '../instructions/instructions.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StartComponent } from '../start/start.component';


@NgModule({
  declarations: [UserDashboardComponent,LoadQuizComponent,
    InstructionsComponent,SidebarComponent,StartComponent],
  imports: [
    //CommonModule,
    UserDashboardRoutingModule,
    MaterialModule,
    LoadQuizModule,
    InstructionsModule,
    
  ],
})
export class UserDashboardModule { }

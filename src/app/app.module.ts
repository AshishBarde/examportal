import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, } from "ngx-ui-loader";
import { AddQuestionModule } from './pages/admin/add-question/add-question.module';
import { AddCategoryModule } from './pages/admin/add-categories/add-category.module';
import { AddQuizModule } from './pages/admin/add-quiz/add-quiz.module';
import { DashboardModule } from './pages/admin/dashboard/dashboard.module';
import { UpdateQuizModule } from './pages/admin/update-quiz/update-quiz.module';
import { ViewCategoriesModule } from './pages/admin/view-categories/view-categories.module';
import { ViewQuizQuestionsModule } from './pages/admin/view-quiz-questions/view-quiz-questions.module';
import { ViewQuizzesModule } from './pages/admin/view-quizzes/view-quizzes.module';
import { WelcomeModule } from './pages/admin/welcome/welcome.module';
import { ProfileModule } from './pages/profile/profile.module';
import { MaterialModule } from './material.module';
import { LoginModule } from './pages/login/login.module';

import { UserDashboardModule } from './pages/user/user-dashboard/user-dashboard.module';
import { authInterceptorProvider } from './services/auth.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.ballSpinClockwise, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,

    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }
    ),
    
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

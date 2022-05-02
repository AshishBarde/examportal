import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AddQuizModule } from './pages/admin/add-quiz/add-quiz.module';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path:'signup',component:SignupComponent},
  {path:'login', component:LoginComponent
  //loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},


  {
  
  path:'admin',
   component:DashboardComponent,
  //loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AdminGuard],
  children: [
      {
        path:'',
        //component: WelcomeComponent,
         loadChildren: () => import('./pages/admin/welcome/welcome.module').then(m => m.WelcomeModule)
       },
       {
         path:'profile',
         //component: ProfileComponent,
         loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
       },
       {
        path:'categories',
         //component: ViewCategoriesComponent,
         loadChildren: () => import('./pages/admin/view-categories/view-categories.module').then(m => m.ViewCategoriesModule)
      },
      {
         path:'add-category',
        //component: AddCategoriesComponent
       loadChildren: () => import('./pages/admin/add-categories/add-category.module').then(m => m.AddCategoryModule) 
       },
      {
         path:'quizzes',
         //component: ViewQuizzesComponent
         loadChildren: () => import('./pages/admin/view-quizzes/view-quizzes.module').then(m => m.ViewQuizzesModule)
      },
      {
        path:'add-quiz',
         //component: AddQuizComponent
        loadChildren: () => import('./pages/admin/add-quiz/add-quiz.module').then(m => AddQuizModule)
      },
       {
         path:'quiz/:qid',
         //component: UpdateQuizComponent
         loadChildren: () => import('./pages/admin/update-quiz/update-quiz.module').then(m => m.UpdateQuizModule)
      },
       {
        path:'view-questions/:qid/:title',
        //component: ViewQuizQuestionsComponent
         loadChildren: () => import('./pages/admin/view-quiz-questions/view-quiz-questions.module').then(m => m.ViewQuizQuestionsModule)
       },

       {
         path:'add-question/:qid/:title',
         //component: AddQuestionComponent
         loadChildren: () => import('./pages/admin/add-question/add-question.module').then(m => m.AddQuestionModule)
      },

    ]

  },

  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    //loadChildren: () => import('./pages/user/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
    canActivate: [NormalGuard],
     children:[
      {
        path:':cId',
      //component: LoadQuizComponent
        loadChildren: () => import('./pages/user/load-quiz/load-quiz.module').then(m => m.LoadQuizModule)
     },
      {
        path:'instructions/:qId',
      // component:InstructionsComponent
        loadChildren: () => import('./pages/user/instructions/instructions.module').then(m => m.InstructionsModule)
      },
     ]
  },
  {
    path:'start/:qId',
    //component: StartComponent,
    loadChildren: () => import('./pages/user/start/start.module').then(m => m.StartModule),
    canActivate: [NormalGuard],
  }, 
  { path: '**', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

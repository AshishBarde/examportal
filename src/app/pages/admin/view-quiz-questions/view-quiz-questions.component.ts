import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId=0;
  title='';
  public question={} as Question[];
  constructor(private _activatedRoute: ActivatedRoute, 
    private _questionService: QuestionService,
    private _snack: MatSnackBar,
    private _cat: CategoryService,
    private _router: Router) { }

  ngOnInit(): void {
    this.qId=this._activatedRoute.snapshot.params.qid;
    this.title=this._activatedRoute.snapshot.params.title;
    console.log(this.qId+"****"+this.title);
    this.question=[];
    this._questionService.getQuestionById(this.qId).subscribe(
      (data: any)=>{
        this.question = data;
        console.log(this.question);
    },(error)=>{
      Swal.fire('Error','Error In Loading Question Data','error');
    })
  }

  deleteQuestion(question: any)
  {
    let qId= question.quesId;
    this._questionService.deleteQuestionById(question.quesId).subscribe(
      (data: any)=>{
        Swal.fire('Success!!'," "+"Question is deleted successfully",'success').then((e)=>{
         // this._router.navigate(['/admin/quizzes']);
         this.question = this.question.filter((question)=>question.quesId != qId);
        });
      },(error)=>{
        Swal.fire('failure!!',error+" ",'error');
      })
  }

}

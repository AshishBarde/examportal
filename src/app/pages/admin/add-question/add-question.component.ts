import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Quiz } from 'src/app/model/quiz.model';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

import  * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId: number =0;
  title='';
  public Editor= ClassicEditor;
  public question= {} as Question;
  
  

  constructor(private _activatedRoute: ActivatedRoute,
              private _questionService: QuestionService,
              private _snack: MatSnackBar,
              private _router: Router,) { 
              }

  ngOnInit(): void {
    this.qId = this._activatedRoute.snapshot.params.qid;
    this.title = this._activatedRoute.snapshot.params.title;
    this.question.quiz = {qId:this.qId};
    console.log(this.qId +" "+ this.title);
  }

 

  addQuestion()
  {
    if(this.question.content==null || this.question.content=='')
    {
      this._snack.open('content Required !!','',{
        duration:3000
      })
      return;
    }
    if(this.question.option1==null || this.question.option1=='')
    {
      this._snack.open('option1 Required !!','',{
        duration:3000
      })
      return;
    }
    if(this.question.option2==null || this.question.option2=='')
    {
      this._snack.open('option2 Required !!','',{
        duration:3000
      })
      return;
    }
    this._questionService.addQuestion(this.question).subscribe(
      (data: any)=>{
        console.log(data);
        Swal.fire('Success!!'," "+"Quiz is updated successfully",'success').then((e)=>{
          this._router.navigate(['/admin/view-questions/'+this.qId +'/'+this.title]);
        });

      },(error)=>{
        Swal.fire('failure!!',error+" ",'error');
      })
  }

}

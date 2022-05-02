import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Quiz } from 'src/app/model/quiz.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  public categories= [] as Array<Category>;
  public quiz: Quiz = {title:'',description:'',category:{cId:0}}
  qId=0;

  constructor(private _activatedRoute: ActivatedRoute, 
    private _quizService: QuizService,
    private _snack: MatSnackBar,
    private _cat: CategoryService,
    private _router: Router) { }
  
  
  ngOnInit(): void {
    this.qId=this._activatedRoute.snapshot.params.qid;
    this._quizService.getQuiz(this.qId).subscribe(
      (data: any)=>{
        this.quiz = data;
        console.log(this.quiz);
    },(error)=>{
      Swal.fire('failure!!',error+" ",'error');
    })

    this._cat.categories().subscribe(
      (data: any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Error In Loading Data','error');
      })

  }

  updateQuiz()
  {
    if(this.quiz.title?.trim() == '' || this.quiz.title == null)
    {
      this._snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }

    this._quizService.updateQuiz(this.quiz).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success!!'," "+"Quiz is updated successfully",'success').then((e)=>{
          this._router.navigate(['/admin/quizzes']);
        });
    },
    (error)=>{
      Swal.fire('failure!!',error+" ",'error');
    })
  }

}

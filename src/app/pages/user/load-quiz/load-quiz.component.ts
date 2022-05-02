import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _quizService: QuizService) { }
  cId=0;
  public quizzes={} as Quiz[];
  ngOnInit(): void {
    this.cId= this._route.snapshot.params.cId;
    this._route.params.subscribe((param)=>{
      this.cId = param.cId;
      if(this.cId==0)
      {
        this.quizzes=[];
      this._quizService.getQuizzes().subscribe(
        (data: any)=>{
         
          this.quizzes = data;
          console.log(this.quizzes);
  
      },(error)=>{
        console.log(error);
        Swal.fire('Error','Error In Loading Data','error');
      })
  
      }
      else{
        this.quizzes=[];
        this._quizService.getQuizzesOfCategory(this.cId).subscribe(
          (data: any)=>{
           
            this.quizzes = data;
            console.log(this.quizzes);
    
        },(error)=>{
          console.log(error);
          Swal.fire('Error','Error In Loading Data','error');
        })
      }
  
    })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  
  public quizzes={} as Quiz[];
  
  constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
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

  deleteQuiz(qId: any)
  {
    Swal.fire({
      icon: 'info',
      title: 'Are You Sure !',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result)=>{
       if(result.isConfirmed)
       {
        this._quizService.deleteQuiz(parseInt(qId)).subscribe((data)=>{
          this.quizzes = this.quizzes.filter((quiz)=>quiz.qId != qId);
          Swal.fire('Success!!',"Quiz deleted successfully",'success');
        },(error)=>{
          Swal.fire('failure!!',error+"Error In deleting Quiz",'error');
        })
       }
    })

    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  qId = 0;
  public quizzes={} as Quiz;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private _router: Router) { }

  ngOnInit(): void {
      this.qId = this._route.snapshot.params.qId;
      this._quiz.getQuiz(this.qId).subscribe(
        (data: any)=>{
          console.log(data);
          this.quizzes=data;
        },(error)=>{
        console.log(error);
        Swal.fire('Error','Error In Loading Data','error');
        })
  }

  startQuiz()
  {
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showDenyButton: true,
      confirmButtonText: 'Start',
    }).then((result) => {
      if(result.isConfirmed)
      {
        this._router.navigate(['/start/'+ this.qId]);
      }
    })
  }

}

import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { Quiz } from 'src/app/model/quiz.model';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qId=0;
  marksGot=0;
  correctAnswers=0;
  attemted=0;
  isSubmit=false;
  timer:any;
 // public questions={} as Question[];
  public quiz={} as Quiz;
  public questions: Question[] = [{quiz:{title:''}}];

  constructor(private _locationStrategy: LocationStrategy,private _route: ActivatedRoute,private _questionService: QuestionService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qId = this._route.snapshot.params.qId;
    console.log("***********"+this.qId);
    this.getQuestionForTest(this.qId);
  }

  preventBackButton()
  {
    history.pushState(null, '', location.href);
    this._locationStrategy.onPopState(()=>{
     history.pushState(null, '', location.href);
    })
  }

  getQuestionForTest(qId: number)
  {
    this._questionService.getQuestionsOfQuizForTest(qId).subscribe(
      (data: any)=>{
        console.log(data);
        this.questions = data;
        this.timer = this.questions.length * 1 * 60;
        this.questions.forEach((q=>{
          q.givenAnswer = '';
        }))
        this.startTimer();
    },(error)=>{
      console.log(error);
      Swal.fire("Error","Error In Loading Data","error");
    })
  }

  submitQuiz()
  {
    Swal.fire({
      title: 'Do you want to Submit the quiz?',
      showDenyButton: true,
      confirmButtonText: 'Submit',
    }).then((result) => {
      if(result.isConfirmed)
      {
        //this.evalQuiz();
        this._questionService.evalquiz(this.questions).subscribe((data: any)=>{
          console.log(data);
            this.correctAnswers=data.correctAnswers;
            this.attemted = data.attemted;
            this.marksGot = data.marksGot;
            this.isSubmit=true;
            console.log(this.marksGot+"***"+this.correctAnswers);
            console.log(this.attemted);
        },(error)=>{
          console.log(error);
        })
      }
    })
  }

  startTimer()
  {
    let t = window.setInterval(()=>{
      if(this.timer<=0)
      {
        //this.evalQuiz();
        this._questionService.evalquiz(this.questions).subscribe((data:any)=>{
          console.log(data);
            this.correctAnswers=data.correctAnswers;
            this.attemted = data.attemted;
            this.marksGot = data.marksGot;
            this.isSubmit=true;
            console.log(this.marksGot+"***"+this.correctAnswers);
            console.log(this.attemted);

        },(error)=>{
          console.log(error);
        })
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }

  getFormattedTime()
  {
    let mm = Math. floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz()
  {
    this.isSubmit=true;
        this.questions.forEach(d=>{
          if(d.givenAnswer == d.answer)
          {
            this.correctAnswers++;
            let marksSingle = this.questions[0].quiz?.maxMarks / this.questions.length;
            this.marksGot += marksSingle;
          }
          if(d.givenAnswer?.trim()!='')
          {
            this.attemted++;
          }
          
        })
       
        console.log(this.questions);
  }

  printPage()
  {
    window.print();
  }

}

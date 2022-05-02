import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/model/category.model';
import { Quiz } from 'src/app/model/quiz.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  public categories= [] as Array<Category>;
  public quiz: Quiz = {title:'',description:'',category:{cId:0}}
  
  
  
  constructor(private _cat: CategoryService, private _quiz: QuizService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    console.log("*********"+JSON.stringify(this.quiz));
    this.categories=[];
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

  addQuiz()
  {
    if(this.quiz.title?.trim() == '' || this.quiz.title == null)
    {
      this._snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }
    this._quiz.addQuiz(this.quiz).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success!!'," "+"Quiz is added successfully",'success');
    },
    (error)=>{
      Swal.fire('failure!!',error+" ",'error');
    })

  }

}

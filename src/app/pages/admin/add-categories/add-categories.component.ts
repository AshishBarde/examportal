import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  public category ={} as Category;

  constructor(private _category: CategoryService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.category.title==undefined || this.category.title.trim()=='' || this.category.title==null)
    {
      this._snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }
    this._category.addCategory(this.category).subscribe((data:any)=>{
      this.category={} as Category;
      Swal.fire('Success!!',data.title+" "+"Category is added successfully",'success');

    },
    (error)=>{
      console.log(error);
      Swal.fire('failure!!',error+" ",'error');
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  public categories ={} as Category[];
 
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  this.categories=[];
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error','Error In Loading Data','error');
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public categories ={} as Category[];
  constructor(private _category: CategoryService, private _snack: MatSnackBar) { }

  ngOnInit(): void {
    this.categories=[];
    this._category.categories().subscribe((data:any)=>{
      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error','Error In Loading Data','error');
    })

  }

}

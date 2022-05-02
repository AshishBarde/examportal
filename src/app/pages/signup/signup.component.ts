import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from 'src/app/helper/base-url.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit  {

  public user ={} as User ;

  constructor(private userService: UserService,private snack: MatSnackBar) { 
    
  }

  ngOnInit(): void {
    
  }

  formSubmit()
  {
    console.log("*****************" + `${baseUrl}`);
    if(this.user.userName == null || this.user.userName == "")
    {
      this.snack.open('Username Can Not Be Null or Empty','',{
        duration:3000
      });
      return;
    }
    this.userService.addUser(`${baseUrl}/user/`,this.user).subscribe(
      (data)=>{
        Swal.fire(
          'User Register Succesfully!',
          'You clicked the button!',
          'success'
        )
        console.log("*********"+ data);
      },
      (error)=>{
        this.snack.open('Something went wrong','',{
          duration:3000
        });
      }
    )
    
  }

}

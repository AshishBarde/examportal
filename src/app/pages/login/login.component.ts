import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import baseUrl from 'src/app/helper/base-url.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   login = {
    userName: '',
    password: '',
    };

  constructor(private snack : MatSnackBar,
    private loginService: LoginService,
    private _router: Router) { 
    
  }
  
  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log("clicked submit button");
    if(this.login.userName=='' || this.login.userName==null)
    {
      this.snack.open('Username Required','',{
        duration:3000,
      });
      return;
    }

    if(this.login.password=='' || this.login.password==null)
    {
      this.snack.open('password Required','',{
        duration:3000,
      });
      return;
    }

    this.loginService.generateToken(`${baseUrl}/generate-token`,this.login).subscribe(
      (data: any)=>{
      /*Swal.fire(
        'Get Token Succesfully!',
        'You clicked the button!',
        'success'
      )*/
      console.log("*********"+ data);
      this.loginService.loginUser(data.token);
      this.loginService.getCurrentUser(`${baseUrl}/current-user`).subscribe(        
        (user: any)=>{
          this.loginService.setUser(user);
          console.log("user data",user);
          if(this.loginService.getUserRole()=='ADMIN')
          {
            
            this._router.navigate(['/admin']);
            this.loginService.loginStatusSubject.next(true);
          } 
          else if(this.loginService.getUserRole()=='NORMAL')
          {
            this._router.navigate(['/user-dashboard/0']);
            this.loginService.loginStatusSubject.next(true);
          }else{
            this.loginService.logOut();
          }
        }
      )
    },
    (error)=>{
      this.snack.open('Something went wrong','',{
        duration:3000
      });

  })

}

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from 'src/app/helper/base-url.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private login:LoginService,private snack : MatSnackBar,) { }

  ngOnInit(): void {
     this.login.getCurrentUser(`${baseUrl}/current-user`).subscribe(        
      (user: any)=>{

        this.user = user;

      },(error)=>{
        this.snack.open('Something went wrong','',{
          duration:3000
        });
      })
      
    }

}

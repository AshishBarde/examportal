import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login: LoginService, private router: Router) { }

  isUserActive: boolean =false;
  user: any = null;
  ngOnInit(): void {
    this.isUserActive = this.login.isLogin();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isUserActive = this.login.isLogin();
      this.user = this.login.getUser();
    })
  }

  logout()
  {
    this.login.logOut();
    this.login.loginStatusSubject.next(false);
    this.router.navigate(['login']);
    
  }

}

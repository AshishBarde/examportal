import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  public getCurrentUser(url:string)
  {
    return this.httpClient.get(url);
  }

  public generateToken(url:string,loginData:any)
  {
    return this.httpClient.post(url,loginData);
  }

  public loginUser(token:string)
  {
    localStorage.setItem("token",token);
    return true;
  }

  public isLogin()
  {
    let loginStr = localStorage.getItem('token');
    if(loginStr==undefined || loginStr=='' || loginStr==null)
    {
      return false;
    }else{
      return true;
    }

  }

  public logOut()
  {
    localStorage.removeItem('token');
    return true;
  }

  public getToken()
  {
    return localStorage.getItem("token");
  }

  public setUser(user: any)
  {
    localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser()
  {
    let userStr=localStorage.getItem('user');
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logOut();
      return null;
    }
  }

  public getUserRole()
  {
    let user = this.getUser();
    return user.authorities[0].authority;

  }
}

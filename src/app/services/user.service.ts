import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  public addUser(url:string,user:any)
  {
    return this.httpclient.post(url,user);
  }

}

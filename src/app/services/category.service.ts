import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from 'src/app/helper/base-url.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  public categories()
  {
    return this.httpClient.get(`${baseUrl}/category/`);
  }

  //add category
  public addCategory(category:any)
  {
    return this.httpClient.post(`${baseUrl}/category/`,category);

  }
}

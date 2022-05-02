import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/base-url.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _httpClient: HttpClient) { }
  public getQuizzes()
  {
    return this._httpClient.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz: any)
  {
    return this._httpClient.post(`${baseUrl}/quiz/`,quiz);
  }

  public deleteQuiz(qId: number)
  {
    return this._httpClient.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId: number)
  {
    return this._httpClient.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quiz: any)
  {
    return this._httpClient.put(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizzesOfCategory(cId: number)
  {
    return this._httpClient.get(`${baseUrl}/quiz/category/${cId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/base-url.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _httpClient: HttpClient) { }

  getQuestionById(qId: number)
  {
    return this._httpClient.get(`${baseUrl}/question/quiz/all/${qId}`);
  }

  getQuestionsOfQuizForTest(qId: number)
  {
    return this._httpClient.get(`${baseUrl}/question/quiz/${qId}`);
  }

  addQuestion(question: any)
  {
    return this._httpClient.post(`${baseUrl}/question/`,question);
  }

  deleteQuestionById(qId: number)
  {
    return this._httpClient.delete(`${baseUrl}/question/${qId}`)
  }

  evalquiz(question: any)
  {
    return this._httpClient.post(`${baseUrl}/question/questions/evalquiz`,question);
  }
}

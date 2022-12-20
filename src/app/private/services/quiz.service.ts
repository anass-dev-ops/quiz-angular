import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url = "http://localhost:8080/api/quizzes";

  constructor(private http: HttpClient) { }

  public getQuizzes() {
    return this.http.get(this.url);
  }

  public addQuiz(quiz: Quiz) {
    return this.http.post(this.url, quiz);
  }
}

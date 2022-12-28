import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url = "http://localhost:8080/api/questions";

  constructor(private http: HttpClient) { }

  getQuestions(quizId: number) {
    return this.http.get(`${this.url}/quizzes/${quizId}`);
  }

  getQuestionById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  addQuestion(question: Question) {
    return this.http.post(this.url, question);
  }

  updateQuestion(question: Question) {
    return this.http.put(this.url, question);
  }
}

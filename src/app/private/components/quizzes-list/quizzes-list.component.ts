import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit {

  quizzes:any = [];

  constructor(private quizeService: QuizService) { }

  ngOnInit(): void {
    this.onGetQuizzes();
  }

  onGetQuizzes() {
    this.quizeService.getQuizzes().subscribe({
      next: (val) => {this.quizzes = val}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/private/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes: any = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.onGetQuizzes()
  }

  onGetQuizzes() {
    this.quizService.getQuizzes().subscribe({
      next: value => {
        this.quizzes = value;
      }
    });
  }

}

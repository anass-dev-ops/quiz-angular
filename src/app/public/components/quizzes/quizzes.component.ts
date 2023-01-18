import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/private/services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes: any = [];
  categoryId: number;

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute
    ) {
      this.categoryId = this.activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.onGetQuizzes(this.categoryId);
  }

  onGetQuizzes(id: number) {
    this.quizService.getQuizzesByCategoryId(id).subscribe({
      next: value => {
        this.quizzes = value;
      }
    });
  }

}

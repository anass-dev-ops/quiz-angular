import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { faPlay, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  faPlay = faPlay;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  quizId: number;
  questions: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private questionService: QuestionService
    ) {
    this.quizId = this.activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.onGetQuestionsByQuizId(this.quizId);
  }

  onGetQuestionsByQuizId(id: number) {
    this.questionService.getQuestions(id).subscribe({
      next: (val) => { this.questions = val;}
    });
  }

}

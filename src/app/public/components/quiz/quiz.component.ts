import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/private/services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any = [];
  reqQuestions: FormGroup;
  counter:number = 1;
  seconds: number = 60;
  score: number = 0;
  showScore: boolean = false;
  quizId: number;

  constructor(
    private questionService: QuestionService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
    ) {
      this.reqQuestions = this.fb.group({
        responseQ1: "",
        responseQ2: "",
        responseQ3: "",
        responseQ4: "",
        responseQ5: "",
        responseQ6: "",
        responseQ7: "",
        responseQ8: "",
        responseQ9: "",
        responseQ10: "",
      });
      this.quizId = this.activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.onGetQuestions();
    this.doCount();




  }

  onGetQuestions() {
    this.questionService.getQuestions(this.quizId).subscribe({
      next: val => {
        this.questions = val;

      }
    });
  }

  onSubmit() {
    this.doEvaluate();
  }

  doCount() {
    setTimeout(() => {
      this.seconds--;
      if(this.seconds == 0) {
        this.seconds = 60;
        this.counter--;
      }
      if(this.counter != -1) {
        this.doCount();
      } else {
        this.counter = 0;
        this.seconds = 0;
        this.doEvaluate();
      }

    }, 1000);
  }

  doEvaluate() {
    this.showScore = !this.showScore;
    const reqQuestionsVal = Object.values(this.reqQuestions.value)
    for(var i=0; i<this.questions.length; i++) {
      if(this.questions[i].correctAnswer === reqQuestionsVal[i]) {
        this.score++;
      }
    }
  }

}

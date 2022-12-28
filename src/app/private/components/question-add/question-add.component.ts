import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  questionForm = this.fb.group({
    description: [""],
    option1: [""],
    option2: [""],
    option3: [""],
    option4: [""],
    correctAnswer: [""],
    quizId: [""]
  });
  options = ["option1", "option2", "option3", "option4"];
  quizId: number;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
    ) {
      this.quizId = activatedRoute.snapshot.params['quizId'];
    }

  ngOnInit(): void {

  }

  onSubmit(questionForm: FormGroup) {
    questionForm.value.quizId = this.quizId;
    console.log(questionForm.value);
    this.questionService.addQuestion(questionForm.value).subscribe({
      next: (val) => { console.log(val); this.router.navigateByUrl(`/private/questions-list/${this.quizId}`); }
    });
  }

  onClear() {

  }

}

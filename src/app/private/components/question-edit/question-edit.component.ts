import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  question: Question = {};
  questionId: number;
  questionForm = this.formBuilder.group({
    description: [""],
    option1: [""],
    option2: [""],
    option3: [""],
    option4: [""],
    correctAnswer: [""],
  });

  constructor(
    private questionService:QuestionService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
    ) {
      this.questionId = this.activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {

    this.onGetQuestion(this.questionId);
  }

  onGetQuestion(id: number) {
    this.questionService.getQuestionById(id).subscribe({
      next: (value) => {
        this.question = value;
        this.onInitQuestionForm(this.question);
      }
    });
  }


  onInitQuestionForm(question: Question) {
    this.questionForm = this.formBuilder.group({
      description: [`${question.description}`],
      option1: [`${question.option1}`],
      option2: [`${question.option2}`],
      option3: [`${question.option3}`],
      option4: [`${question.option4}`],
      correctAnswer: [`${question.correctAnswer}`],
    });
  }

  onSubmit(questionForm: FormGroup) {
    questionForm.value.id = this.questionId;
    this.questionService.updateQuestion(questionForm.value).subscribe({
      next: (value) => { console.log(value); this.location.back();}
    });
  }

  onClear() {

  }

}

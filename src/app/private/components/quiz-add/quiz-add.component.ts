import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css']
})
export class QuizAddComponent implements OnInit {

  quizForm = this.fb.group({
    title: [''],
    categoryId: [''],
    description: [''],
    details: ['']
  });

  categories: any = [];

  constructor(
    private quizService: QuizService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  onAddQuiz(quiz: FormGroup) {
    console.log(quiz.value);
    this.quizService.addQuiz(quiz.value).subscribe({
      next: (val) => { this.router.navigateByUrl('/private/quizzes-list'); console.log(val); },
      error: (err) => { console.log(err); }
    });
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => { this.categories = data },
      error: (err) => { this.categories = null; console.log(err) }
    });
  }

}

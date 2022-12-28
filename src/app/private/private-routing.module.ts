import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuizAddComponent } from './components/quiz-add/quiz-add.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';

const routes: Routes = [
  { path: "categories", component: CategoriesListComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "category-add", component: CategoryAddComponent },
  { path: "category-edit/:id", component: CategoryEditComponent },
  { path: "quizzes-list", component: QuizzesListComponent },
  { path: "quiz-add", component: QuizAddComponent },
  { path: "questions-list/:id", component: QuestionsListComponent },
  { path: "question-add/:quizId", component: QuestionAddComponent },
  { path: "question-edit/:id", component: QuestionEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

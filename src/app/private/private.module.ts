import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { QuizAddComponent } from './components/quiz-add/quiz-add.component';
import { CategoryService } from './services/category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { QuizService } from './services/quiz.service';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionService } from './services/question.service';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';


@NgModule({
  declarations: [
    PrivateComponent,
    CategoriesListComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAddComponent,
    QuizzesListComponent,
    QuizAddComponent,
    CategoryEditComponent,
    QuestionsListComponent,
    QuestionAddComponent,
    QuestionEditComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, CategoryService, QuizService, QuestionService],
})
export class PrivateModule { }

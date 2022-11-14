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


@NgModule({
  declarations: [
    PrivateComponent,
    CategoriesListComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAddComponent,
    QuizzesListComponent,
    QuizAddComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [HttpClient, CategoryService],
})
export class PrivateModule { }

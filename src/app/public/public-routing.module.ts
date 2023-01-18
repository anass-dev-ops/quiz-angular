import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'quizzes/:id', component: QuizzesComponent},
  { path: 'quiz/:id', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { faCode, faBlog } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/private/services/category.service';
import { QuizService } from 'src/app/private/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCode = faCode;
  faBlog = faBlog;
  categories: any = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe({
      next: val => {
        console.log(val);
        this.categories = val;
      }
    })
  }

}

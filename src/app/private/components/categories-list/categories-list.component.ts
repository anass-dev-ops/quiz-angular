import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faSquare = faSquare;
  faWindowMinimize = faWindowMinimize;
  faPlay = faPlay;

  categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  onGetCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    });
  }

}

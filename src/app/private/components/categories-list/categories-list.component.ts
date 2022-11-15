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
    this.categoryService.getCategories().subscribe({
      next: (data) => { this.categories = data },
      error: (err) => { this.categories = null; console.log(err) }
    });
  }

  onDeleteCategory(id: number) {
    if(confirm("are you sur ?")) {
      this.categoryService.deleteCategory(id).subscribe({
        next: (data) => { this.onGetCategories(); console.log(data); },
        error: (err) => { console.log('ERRRROORR', err) }
      });
    }
  }

}

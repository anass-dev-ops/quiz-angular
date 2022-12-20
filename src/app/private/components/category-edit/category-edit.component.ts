import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm = this.fb.group({
    name: [''],
    description: ['']
  });

  category: Category = {};
  currentId: number = 0;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params['id'];
    this.onGetCategoryById(this.currentId);
  }

  onSubmit(categoryForm: FormGroup) {
    let ca = categoryForm.value;
    ca.id = this.currentId;
    this.categoryService.editCategory(ca).subscribe({
      next: (val) => { console.log(val);  this.router.navigateByUrl('/private/categories')},
      error: (err) => { console.log(err); }
    });
  }

  onClear() {
    this.onInitCategoryForm({name: '', description: ''});
  }

  onInitCategoryForm(category: Category) {
    this.categoryForm = this.fb.group({
      name: [`${category.name}`],
      description: [`${category.description}`]
    });
  }

  onGetCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe({
      next: (val) => {
        this.category = val;
        this.onInitCategoryForm(this.category);
      },
      error: (err) => {}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm = this.fb.group({
    name: [''],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router

    ) { }

  ngOnInit(): void {
  }

  onSubmit(categoryForm: FormGroup) {
    console.log(categoryForm.value);
    this.categoryService.addCategory(categoryForm.value).subscribe({
      next: (val) => { console.log(val);  this.router.navigateByUrl('/private/categories')},
      error: (err) => { console.log(err); }
    });
  }

  onClear() {
    this.categoryForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

}

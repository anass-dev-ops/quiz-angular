import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "http://localhost:8080/api/categories";

  constructor(private http:HttpClient) { }

  public getCategories() {
    return this.http.get(`${this.url}`);
  }

  public addCategory(category: Category) {
   return this.http.post(`${this.url}`, category);
  }

  public deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  public getCategoryById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  public editCategory(category: Category) {
    return this.http.put(`${this.url}`, category);
  }
}

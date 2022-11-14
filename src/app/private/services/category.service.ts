import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getCategories() {
    return this.http.get(`${this.url}/categories`);
  }
}

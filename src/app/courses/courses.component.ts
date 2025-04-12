import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../Models/category.model';
import { Course } from '../Models/category.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  categoryTitle!: string;
  categories : Category[] = [];
  courses : Course[] = [];

  constructor(
    private route : ActivatedRoute, 
    private categoryService : CategoryService
  ) {}
  ngOnInit(): void {
    this.categoryTitle = this.route.snapshot.paramMap.get('title') || '';
    console.log('Category Title:', this.categoryTitle); 

    this.categoryService.getCategories().subscribe(categories => {
      console.log('Categories:', categories);

      const category = categories.find(cat => cat.title === this.categoryTitle);
      if(category) {
        this.courses = category.courses;
        console.log('Courses:', this.courses);
      } else {
        console.error('No category found with the title:', this.categoryTitle)
      }
    });
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  
}

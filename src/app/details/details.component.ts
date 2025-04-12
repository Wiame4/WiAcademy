import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Course } from '../Models/category.model';
import { Category } from '../Models/category.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  courseTitle!:string;
  course : Course | undefined;
  sanitizedUrl!: SafeResourceUrl;

  constructor(
    private route : ActivatedRoute,
    private categoryService : CategoryService,
    private sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
    this.courseTitle = this.route.snapshot.paramMap.get('title') || '';
    this.categoryService.getCategories().subscribe(categories => {
      const foundCourse = categories.flatMap(cat => cat.courses)
                                    .find(course => course.title === this.courseTitle);
      if (foundCourse) {
        this.course = foundCourse;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.course.youtubePlaylist);
      }
    });
  }
}

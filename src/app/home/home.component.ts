import { Component , OnInit} from '@angular/core';
import { Category } from '../Models/category.model';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
email1 : string = "techlov321@gmail.com";
email2 : string = "mindyy4@gmail.com";
email3 : string = "lilyy5@gmail.com";
email4 : string = "devev9@gmail.com";


  categories : Category[] = [];

  constructor (
    private router : Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  viewCourses(title : string) : void {
    this.router.navigate(['/courses',title]);
  }
  
}


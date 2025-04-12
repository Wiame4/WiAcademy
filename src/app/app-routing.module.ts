import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path : '', component : FirstPageComponent},
  { path : 'firstPage', component : FirstPageComponent}, 
  { path : 'home', component : HomeComponent},
  { path : 'courses/:title', component : CoursesComponent},
  { path : 'details/:title', component : DetailsComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Restaure la position de défilement lors de la navigation
    anchorScrolling: 'enabled' // Active le défilement vers le fragment
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

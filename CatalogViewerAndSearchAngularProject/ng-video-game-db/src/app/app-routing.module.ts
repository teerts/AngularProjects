import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    // Default path for route
    path: '',
    component: HomeComponent, 
  },
  {
    // All of the searches land on the default page with a parameter sent with the route 
    path: 'search/:game-search', 
    component: HomeComponent, 
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './../add-movie/add-movie.component';
import { MovieHomeComponent } from '../movie-home/movie-home.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component'
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
/*
Here we configure routing and router outlet.
Each path is mapped to corresponding component it needs to navigate to.
*/
const routes: Routes = [
    { path: '', redirectTo: '/movieHome', pathMatch: 'full' },
    { path: 'movieHome', component: MovieHomeComponent },
    { path: 'addMovie', component: AddMovieComponent },
    { path: 'movieDetail/:id', component: MovieDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

// A const that holds all our routing configuration. This is globally imported in @NgModule.
export const movieRouting = RouterModule.forRoot(routes);

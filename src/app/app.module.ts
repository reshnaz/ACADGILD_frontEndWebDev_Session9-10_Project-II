import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipe/search.pipe';
import { movieRouting } from './routes/movie.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'; 
import { MovieService } from './service/movie.service';
import { MyMouseOverDirective } from './custom-directives/my-mouse-over.directive';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstPipe,
    SearchPipe,
    PageNotFoundComponent,
    MovieHomeComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieDetailComponent,
    MyMouseOverDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, movieRouting
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

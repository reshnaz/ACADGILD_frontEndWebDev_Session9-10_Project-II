import { Component, OnInit } from '@angular/core';
import { MovieModel } from './../interface/movie-model';
import { MovieService } from './../service/movie.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  // Necessary variable declarations which will be used in html
  movieList: MovieModel[] = [];
  movie: MovieModel;

  // Declare variable to use movie service.
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    // Get list of movies when component is initialized using service.
    this.movieList=this._movieService.getMovie();
  }

}
 
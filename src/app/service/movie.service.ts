import { Injectable } from '@angular/core';
import { MovieModel } from './../interface/movie-model';

@Injectable()
export class MovieService {

  movieList: MovieModel[] = [];
  movie: MovieModel;

  constructor() { }

  // Get all movies
  getMovie(): MovieModel[] {
    return this.movieList;
  }

  // Get specific movie based on ID.
  getMovieWithId(id: number|string): MovieModel {
    return this.movie = this.movieList[+id];
  }

  // Adds movie to array.
  addMovie(movie: MovieModel) {
    this.movieList.unshift(movie);
  }

}

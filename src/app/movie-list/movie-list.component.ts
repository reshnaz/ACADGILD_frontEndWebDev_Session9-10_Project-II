import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MovieModel } from './../interface/movie-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {

  /**Get the movieDetail app component  */
  @Input() movies;

  // String to search with.
  private searchString: string;

  // Object of type "MovieModel" interface
  movie: MovieModel;

  constructor() { }

  ngOnInit() {
    this.searchString = '';
  }

}

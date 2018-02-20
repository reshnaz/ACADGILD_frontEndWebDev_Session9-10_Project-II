import { Component, OnInit } from '@angular/core';
import { MovieService } from './../service/movie.service';
import { MovieModel } from './../interface/movie-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  // Necessary variable declarations to be used in html (& retrieve movie data)
  movie: MovieModel;
  private id: string;

  constructor(private _route: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit() {
    // Use id passed in URL parameters to fetch appropriate movie detail.
    this.id = this._route.snapshot.paramMap.get('id');
    this.movie = this._movieService.getMovieWithId(+this.id-1);
  }

}

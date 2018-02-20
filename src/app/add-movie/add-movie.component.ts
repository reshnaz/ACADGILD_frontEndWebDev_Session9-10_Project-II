import { Component, OnInit } from '@angular/core';
import { MovieModel } from './../interface/movie-model';
import { MovieService } from './../service/movie.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  /* Necessary variable declarations which will be used in html */
  movie: MovieModel;

  // Declaring 'f' of Type FormGroup
  f: FormGroup;

  id: number = 0;

  // Using constructor, declare service, form builder and router variables.
  constructor(private _movieService: MovieService, private _fbuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {

    /* Using FormBuilder and initializing the form controls within it
     along with validators */

    this.f = this._fbuilder.group({
      'movieName': ['', Validators.compose([Validators.required])],
      'movieRating': ['', Validators.compose([Validators.required])],
      'movieReleaseDate': ['', Validators.compose([Validators.required])],
      'movieDescription': [''],
      'movieImageURL': ['']
    });

  }

  // This function is called from html which in turn calls the functions in our movie service.
  addMovie(vals) {

    // Assign input values to interface variables.
    this.movie = {
      id: this.id++,
      movieName: vals.movieName,
      movieRating: vals.movieRating,
      movieReleaseDate: vals.movieReleaseDate,
      movieDescription: vals.movieDescription,
      movieImageURL: vals.movieImageURL
    }

    // Set value to "N/A" if no value is entered by user for movie description.
    if (this.movie.movieDescription == "") {
      this.movie.movieDescription = "N/A";
    }

    // Set default image if no URL is given by user for movie image.
    if (this.movie.movieImageURL == "") {
      this.movie.movieImageURL = "http://www.reelviews.net/resources/img/default_poster.jpg";
    }

    // Service function called to add movie details to array
    this._movieService.addMovie(this.movie);

    // Redirecting page to home
    this._router.navigate(['/movieHome']);
  }

}

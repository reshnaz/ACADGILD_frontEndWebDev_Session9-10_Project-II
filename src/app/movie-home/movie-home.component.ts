import { Component, OnInit } from '@angular/core';
import { MovieModel } from './../interface/movie-model';
import { MovieService } from './../service/movie.service';
import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { MatDialogModule, MatDialog } from '@angular/material';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  // Necessary variable declarations which will be used in html
  movieList: MovieModel[] = [];
  movie: MovieModel;
  dialogResult: string;

  // Declare variable to use movie service.
  constructor(private _movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit() {
    // Get list of movies when component is initialized using service.
    this.movieList=this._movieService.getMovie();
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'Enter task details'
    });
    // dialogRef.updatePosition({ top: '-50px', left: '150px' });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}
 
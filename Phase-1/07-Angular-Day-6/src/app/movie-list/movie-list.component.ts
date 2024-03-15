import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesInfo } from '../moviesInfo';   // Include the move list interface 
import { MoviesService } from '../movies.service';  // Access the MoviesService service
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

// This will hold the data for the movies to be displayed 
// The data will come from a call to a service
// It starts out as an empty array
//      var-name : data-type
  public moviesList : MoviesInfo [] ; // This is an array of movie-info objects

// The constructor is used to initialize data in the component
//
// This style of constructor will define the variable, create a MoviesService object, and assign that object 
constructor(private movieService  : MoviesService ) {
  this.moviesList = movieService.getMoviesList();
  // 1. movieService.getMoviesList() - go to the movieService and run the getMoviesList
  // 2. - take what the method returns and assign it to (store it in) 
  // 3. this.moviesList is assigned the data from step 2
}
}

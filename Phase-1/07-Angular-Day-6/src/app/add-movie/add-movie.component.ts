import { Component }     from '@angular/core';
import { MoviesInfo }    from '../moviesInfo';  // Add movies info interface
import { FormsModule }   from '@angular/forms';
import { MoviesService } from '../movies.service';
import { CommonModule }  from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

constructor(private movieService  : MoviesService, 
  private router: Router) {}

  //  Define a place to hold a new movie when entered by the User
  //  Data entered by the user in the web page 
  //  variable : data-type - using the interface as a datatype
public newMovie : MoviesInfo =  {
                                  title : "",
                                  releaseYear: new Date().getFullYear(),
                                  director: ""
                                };


// funcname(parameter:data-type)
addMovie(newMovie : MoviesInfo) {   // Using interface as a data-type
  console.table(newMovie);
  this.movieService.addMovies(newMovie)
  this.router.navigate(['/movies'])
}
cancelButtonClicked() {
  this.router.navigate(['/movies'])
}
}



/************************************************************************************
  This is a service

  A se4rvice is a set of processing to facilitate the 
  retrieval and storage of data - typically in a persistant source (this means saved)

  May do other processing as well

  This service does not save the data to a persistant source

  The data from this service is just an array in memory
  ************************************************************************************/

import { Injectable} from '@angular/core';
import { MoviesInfo } from './moviesInfo';    // Using the moviesInfo interface


@Injectable({
  providedIn: 'root'
})



export class MoviesService {

  // A module contains data and methods/functions for processing that data

    // Source of data for calls to retrieve the data - initialized in the code 
  private listOfMovies : MoviesInfo[] = []  // An array of MovieInfo objects 

  // a constructor is a method to initialize data defined in the module 
  // It is executed automatically when the service is loaded
  // Here we use the constructor to initialize our data-source
  constructor() { 
    this.listOfMovies.push({title: "Godfather"                         , releaseYear: 1972, director: "Francis Ford Coppola"})
    this.listOfMovies.push({title: "Godfather II"                      , releaseYear: 1974, director: "Francis Ford Coppola"})
    this.listOfMovies.push({title: "Star Trek: The Wrath of Khan"      , releaseYear: 1982, director: "Nicholas Meyer"})
    this.listOfMovies.push({title: "Star Wars: The Empire Strikes Back", releaseYear: 1980, director: "Irvin Kershner"})
  }

  // methods others may use to interact with our service

  // This method will return the current data in our data source (list of movies)
  //  name(parameters) : return-type-of-the-data-returned
  getMoviesList() : MoviesInfo[] {    // this function will return a MoviesInfo array
    return this.listOfMovies;
  }

  // This method will recieve new MoviesInfo and add to our data source (listOfMovies)
  addMovies(newMovie : MoviesInfo) {

    console.table(newMovie)   // optional - verify new movie data 
    this.listOfMovies.push(newMovie)
    console.table(this.listOfMovies)  // op0tional - verify new movie was added to array 
  }
 
}

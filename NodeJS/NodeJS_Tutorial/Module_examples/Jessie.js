/**
 * Created by Oxygen on 12/10/2016.
 */

var movies = require('./movies');

var jessies_movies = movies();
jessies_movies.favMovie = "All of Harry Potter";
console.log("Jessies favourite movie is: "+ jessies_movies.favMovie)
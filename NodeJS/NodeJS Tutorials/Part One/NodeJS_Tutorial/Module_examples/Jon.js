/**
 * Created by Oxygen on 12/10/2016.
 */
var movies = require('./movies');
var jons_movies = movies();
jons_movies.favMovie = "Event Horizon";
console.log("Jons favourite movie is: "+ jons_movies.favMovie)
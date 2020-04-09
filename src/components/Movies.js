import React from 'react';
import { movies } from '../data';
const movieList = movies.map(movie=>{
  return (
    <div>
    <h3>Title: {movie.title}</h3>
    <p>Movie Runtime: {movie.time}</p>
    <ul>Genres:
      {movie.genres.map(genre=> {
        return <li>{genre}</li>
      })}
    </ul>
    </div>
  )
})
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;

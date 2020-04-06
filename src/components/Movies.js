import React from 'react'
import { movies } from '../data'

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => (
        <div key={idx}>
          <h2>Title: {movie.title}</h2>
          <h2>Time: {movie.time}</h2>
          <h2>Metascore: {movie.metascore}</h2>
          <ol>
          {movie.genres.map((genre, idx) => (
            <li key={idx}>Genres:{genre}</li>
          ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

export default Movies

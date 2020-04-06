import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
      {directors.map((director,idx)=> (
      <div key={idx}>
        <h1>Name: {director.name}</h1>
        <h2>Movies: </h2>
        <ol>
        {director.movies.map((movie,idx)=>(
          <li key={idx}>{movie}</li>
        ))}
        </ol>
      </div>
      ))}
      </ul>
    </div>
  );
}

export default Directors

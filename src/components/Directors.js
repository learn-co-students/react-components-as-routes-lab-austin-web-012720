import React from 'react';
import { directors } from '../data';
const director = directors.map(dir => {
  return (
    <div>
      <h3>{dir.name}</h3>
      <ul>Movies:
        {dir.movies.map(mov=>{
          return <li>{mov}</li>
        })}
      </ul>
    </div>
  )
})
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors

import React from 'react';
import { actors } from '../data';
const actor = actors.map(act=>{
  return (
    <div>
      <h3>Actors name: {act.name}</h3>
      <ul>
        {act.movies.map(movie=>{
          return <li>{movie}</li>
        })}
      </ul>
    </div>
  )
})
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;

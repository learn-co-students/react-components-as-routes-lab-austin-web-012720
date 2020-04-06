import React from 'react'
import { actors } from '../data'

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx}>
          <ul>
            <li>Name: {actor.name}</li>
            <p>Movies:</p>
            <ol>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ol>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors

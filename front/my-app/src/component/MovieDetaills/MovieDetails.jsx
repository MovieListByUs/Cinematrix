import React from 'react'

function MovieDetails({el}) {

    return (
        <div>
          <h2>{el.title}</h2>
          <p>Duration: {el.time}</p>
          <p>Year of release: {el.age}</p>
        </div>
      );
    }

export default MovieDetails
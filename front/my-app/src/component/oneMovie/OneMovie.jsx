import axios from 'axios';
import React, { useState } from 'react';
import MovieDetails from '../MovieDetaills/MovieDetails';

function OneMovie({ movies, setMovies, el }) {
  const [selected, setSelected] = useState(null);

  const getOne = (id) => {
    axios
      .get(`http://localhost:4000/api/movies/${id}`)
      .then((response) => {
        setSelected(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div
        onClick={() => {
          getOne(el.id);
        }}
      >
        {el.title}
      </div>
      <MovieDetails selected={selected} />
    </div>
  );
}

export default OneMovie;

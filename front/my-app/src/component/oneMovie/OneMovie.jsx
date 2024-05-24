import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OneMovie({ movies, setMovies }) {
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  const { movie } = location.state;
  console.log(movie);
  const navigate = useNavigate();
  const getOne = (id) => {
    axios
      .get(`http://localhost:4000/api/movies/getOne/${id}`)
      .then((response) => {
        setSelected(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='contains'>
      {movie.map((elem) => (
        <div key={elem.id} className="movie-card">
          <div
            className="img"
            style={{ backgroundImage: `url(${elem.imgUrl})` }}
          >
            <div
              className="overlay"
              onClick={() => {
                getOne(elem.id);
                navigate('/movie', { state: { elem: elem } });
              }}
            >
              <h3>{elem.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default OneMovie;

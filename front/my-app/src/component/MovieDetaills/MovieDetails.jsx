import axios from 'axios';
import React, { useState } from 'react';
import { IoBagAddSharp } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

function MovieDetails({ setAddedMovies }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { elem } = location.state;

  const addToMyList = (id) => {
    axios
      .post(`http://localhost:4000/api/lista/addTolist`, {
        movieId: id,
        userId: 1,
      })
      .then((response) => {
        console.log(`Movie with ID ${id} just added to MyList `, response);
        setAddedMovies(elem)

      // console.log((prevMovie) => [...prevMovie, elem]) 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="details">
      <h2 id="name">{elem.name}</h2>
      <img src={elem.imgUrl} alt="" id="img" />
      <p id="duration">Duration: {elem.time}</p>
      <p id="age">Year of release: {elem.age}</p>
      <button
        onClick={() => {
          addToMyList(elem.id);
        }}
      >
        <IoBagAddSharp />
      </button>
    </div>
  );
}

export default MovieDetails;

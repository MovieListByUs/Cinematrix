import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const MovieDetails = ({ setAddedMovies }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { elem } = location.state;

  const addToMyList = (id) => {
    const data = {
      movieId: id,
      UserId: 2,
    };
    axios
      .post(
        `http://localhost:4000/api/list/addTolist`,

        data
      )
      .then((response) => {
        console.log(`Movie with ID ${id} just added to MyList `, response);
        setAddedMovies(elem);
        navigate("/list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2 id="name">{elem.name}</h2>
      <img src={elem.imgUrl} alt="" id="img" />
      <p id="duration">Duration: {elem.time}</p>
      <p id="age">Year of release: {elem.author}</p>
      <button
        onClick={() => {
          addToMyList(elem.id);
        }}
      >
        add
        {/* <IoBagAddSharp /> */}
      </button>
    </div>
  );
};

export default MovieDetails;

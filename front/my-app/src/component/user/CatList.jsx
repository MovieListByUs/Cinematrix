import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CatsList.css";
const CatList = () => {
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
    <div className="grid-container">
      <div className="contains">
        {movie.map((elem) => (
          <div className="wrapper">
            {console.log(elem, "it s me")}
            <div className="grid-item">
              <div className="card">
                <img src={elem.imgUrl} alt="movie" />
                <div className="descriptions">
                  <div
                    className="overlay"
                    onClick={() => {
                      getOne(elem.id);
                      navigate("/movie", { state: { elem: elem } });
                    }}
                  >
                    <h1>{elem.name}</h1>
                  </div>
                  <p>{elem.description}</p>
                  <button>
                    <i className="fab fa-youtube" />
                    watch movie
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatList;

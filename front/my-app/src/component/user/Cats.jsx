import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Cats = () => {
  const cats = [
    "Action",
    "Drama",
    "Thriller",
    "Horror",
    "Comedy",
    "Science Fiction",
  ];

  const [category, setCategory] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const getCats = (category) => {
    axios
      .get(`http://localhost:4000/api/movies/cats/${category}`)
      .then((response) => {
        console.log("respose", response.data);
        setMovies(response.data);
        navigate("/catList", { state: { movie: response.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="categories-container">
      {cats.map((el, i) => {
        return (
          <div className="category-item" key={i} onClick={() => getCats(el)}>
            <h3>{el}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cats;

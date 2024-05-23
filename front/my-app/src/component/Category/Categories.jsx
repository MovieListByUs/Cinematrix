import React, { useEffect, useState } from 'react';
import OneMovie from '../oneMovie/OneMovie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Categories() {
  const cats = ['Action', 'Drama', 'Thriller', 'Horror', 'Comedy', 'Science Fiction'];

  const [category, setCategory] = useState('');
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const getCats = (category) => {
    axios
      .get(`http://localhost:4000/api/movies/category/${category}`)
      .then((response) => {
        console.log('respose', response.data);
        setMovies(response.data);
        navigate('/one', { state: { movie: response.data } });
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
}

export default Categories;

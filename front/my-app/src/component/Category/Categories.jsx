import React, { useEffect, useState } from 'react';
import OneMovie from '../oneMovie/OneMovie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Categories() {
  const cats = ['Action', 'Drama', 'Fantasy', 'Horror', 'Comedy', 'Romance'];

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
    <div>
      {cats.map((el, i) => {
        return (
          <div key={i}>
            {/* <OneMovie el={el}  /> */}
            <h3
              onClick={() => {
                getCats(el);
              }}
            >
              {el}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;

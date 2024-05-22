import React, { useEffect, useState } from 'react';
import OneMovie from '../oneMovie/OneMovie';

function Categories() {
  const cats = ['Action', 'Drama', 'Fantasy', 'Horror', 'Comedy', 'Romance'];

  const [category, setCategory] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movies/${category}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    <div>
      {cats.map((el, i) => {
        return (
          <div key={i}>
            <OneMovie el={el} movies={movies} setMovies={setMovies} />
          </div>
        );
      })}
    </div>
  );
}

export default Categories;

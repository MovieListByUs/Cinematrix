import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Categories from './component/Category/Categories';
import Home from './component/home/Home';
import OneMovie from './component/oneMovie/OneMovie';
import MovieDetails from './component/MovieDetaills/MovieDetails';
import MyList from './component/Mylist/MyList';

function App() {
  const [data, setData] = useState([]);
  const [refre, setRefre] = useState(false);
  const [addedMovies, setAddedMovies] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movies/getAll")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => console.log(err));

  }, [refre]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home addedMovies={addedMovies}/>}></Route>
          <Route path="/cats" element={<Categories />}></Route>
          <Route path="/one" element={<OneMovie />}></Route>
          <Route path="/movie" element={<MovieDetails setAddedMovies={setAddedMovies}/>}></Route>
          <Route path="/list" element={<MyList addedMovies={addedMovies} setAddedMovies={setAddedMovies}/>}></Route>
        </Routes>
      </Router>
     
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [category, setCategory] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movies/${category}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    <>
      <Router>
        <Routes>
          <Route path=""></Route>
        </Routes>
      </Router>
      <nav className="main-menu">
        <div>
          <div className="user-info">
            <img src="" alt="user" />
            <p />
          </div>
          <ul>
            <li className="nav-item active">
              <a href="#">
                <i className="fa fa-map nav-icon" />
                <span className="nav-text">Discover</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fa fa-arrow-trend-up nav-icon" />
                <span className="nav-text">Trending</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fa fa-circle-play nav-icon" />
                <span className="nav-text">Playlist</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i className="fa fa-heart nav-icon" />
                <span className="nav-text">Favorites</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;

//aziz
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <nav className="main-menu">
      <div>
        <div className="user-info">
          <img src="" alt="user" />
          <p />
        </div>
        <ul>
          <li className="nav-item active">
            <a>
              <i className="fa fa-map nav-icon" />
              <span
                className="nav-text"
                onClick={() => {
                  navigate('/cats');
                }}
              >
                Discover
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <i className="fa fa-arrow-trend-up nav-icon" />
              <span className="nav-text">Trending</span>
            </a>
          </li>
          <li className="nav-item">
            <a>
              <i className="fa fa-circle-play nav-icon" />
              <span className="nav-text"
              onClick={()=>{navigate('/list')}}>My List</span>
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
  );
}
//adam
import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul className="menu">
          <li>
            <a onClick={() => navigate("/add")}>Add</a>
          </li>
          <li>
            <a onClick={() => navigate("/get")}>Movies</a>
          </li>
          <li>
            <a href="#!">Faq</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Home;

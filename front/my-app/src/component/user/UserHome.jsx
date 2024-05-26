import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
const UserHome = () => {
  const navigate = useNavigate();
  return (
    <div>
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
                    navigate("/cats");
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
                <span
                  className="nav-text"
                  onClick={() => {
                    // navigate("/list");
                  }}
                >
                  My List
                </span>
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
    </div>
  );
};

export default UserHome;

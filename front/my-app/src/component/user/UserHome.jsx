import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
const UserHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="skew-menu">
        <ul>
          <li>
            <a onClick={() => navigate("/cats")}>movies</a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/list");
              }}
            >
              My List
            </a>
          </li>
          <li>
            <a href="#">Shirts</a>
          </li>
          <li>
            <a href="#">Jackets</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserHome;

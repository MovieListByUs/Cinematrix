import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div id="navbar-brand">
          <img
            className="hola"
            src="http://icons.iconarchive.com/icons/sirubico/black-metal/128/Web-b-icon.png"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <button
          id="html"
          onClick={() => {
            navigate("/add");
          }}
        >
          <span id="htmltxt">ADDING</span>
        </button>
        <button
          id="css"
          onClick={() => {
            navigate("/get");
          }}
        >
          <span id="htmltxt">Movies</span>
        </button>
        <button id="JS">
          <span id="htmltxt">JavaScript</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

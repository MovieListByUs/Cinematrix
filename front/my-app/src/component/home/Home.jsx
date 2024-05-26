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

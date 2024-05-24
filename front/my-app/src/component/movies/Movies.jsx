import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";
import Navbar from "../navbar/Navbar";
const Movies = ({ data, refre, setRefre }) => {
  const navigate = useNavigate();
  const one = (id) => {
    axios
      .get(`http://localhost:4000/api/movies/getOne/${id}`)
      .then(() => {
        console.log(`this is movie with id = ${id}`);
      })
      .catch((err) => console.error(err));
  };
  const remove = (id) => {
    axios
      .delete(`http://localhost:4000/api/movies/${id}`)
      .then(() => {
        console.log(`this is movie with id = ${id} is removed `);
        setRefre(!refre);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <img className="locandina" src={el.imgUrl} />
                  <h1
                    onClick={() => {
                      one(el.id);
                      navigate("/one", {
                        state: { el: el },
                      });
                    }}
                  >
                    {el.name}
                  </h1>
                  <h4>
                    {el.year}, {el.author}
                  </h4>
                  <span className="minutes">{el.time} min</span>
                  <p className="type">{el.category}</p>
                </div>
                <div className="movie_desc">
                  <p className="text">{el.description}</p>
                </div>
                <div className="movie_social">
                  <ul>
                    {/* <li>
                      <i className="material-icons">share</i>
                    </li> */}
                    <li>
                      <i
                        className="material-icons"
                        onClick={() => {
                          remove(el.id);
                        }}
                      >
                        X
                      </i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blur_back bright_back" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;

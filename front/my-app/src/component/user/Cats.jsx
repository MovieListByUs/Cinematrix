import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cats.css";
const Cats = () => {
  const cats = [
    "Action",
    "Drama",
    "Thriller",
    "Horror",
    "Comedy",
    "Science Fiction",
  ];

  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const getCats = (category) => {
    axios
      .get(`http://localhost:4000/api/movies/cats/${category}`)
      .then((response) => {
        console.log("respose", response.data);
        setMovies(response.data);
        navigate("/catList", { state: { movie: response.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="categories-container">
      {cats.map((el, i) => {
        return (
          <div style={{ display: "grid" }}>
            <button className="cat-btn" onClick={() => getCats(el)} key={i}>
              {el}
              <svg
                width={79}
                height={46}
                viewBox="0 0 79 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_618_1123)">
                  <path
                    d="M42.9 2H76.5L34.5 44H2L42.9 2Z"
                    fill="url(#paint0_linear_618_1123)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_618_1123"
                    x={0}
                    y={0}
                    width="78.5"
                    height={46}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={1}
                      result="effect1_foregroundBlur_618_1123"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_618_1123"
                    x1="76.5"
                    y1="2.00002"
                    x2="34.5"
                    y2={44}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.6" />
                    <stop offset={1} stopColor="white" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cats;

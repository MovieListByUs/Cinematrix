import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
const Adding = ({ refre, setRefre }) => {
  const [name, setName] = useState("");
  const [des, setdes] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const add = () => {
    axios
      .post("http://localhost:4000/api/movies/add", {
        name: name,
        description: des,
        imgUrl: img,
      })
      .then(() => {
        console.log("added");
        setRefre(!refre);
        navigate("/get");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <form>
        <fieldset>
          <legend>adding Movies</legend>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="prenom">description:</label>
          <input
            type="text"
            onChange={(e) => {
              setdes(e.target.value);
            }}
          />
          <label htmlFor="text">Img:</label>
          <input
            type="text"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </fieldset>
        <button
          id="btn"
          onClick={() => {
            add();
          }}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Adding;

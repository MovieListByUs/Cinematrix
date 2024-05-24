import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./One.css";
const One = ({ refre, setRefre, setData }) => {
  const [name, setName] = useState("");
  const [des, setdes] = useState("");
  const [img, setImg] = useState("");
  const [year, setyear] = useState("");
  const [time, settime] = useState("");
  const [author, setauthor] = useState("");
  const [category, setcategory] = useState("");
  const location = useLocation();
  const { el } = location.state;
  const navigate = useNavigate();
  const updaty = (id) => {
    let updatedData = {};
    if (name !== "") updatedData.name = name;
    if (des !== "") updatedData.description = des;
    if (img !== "") updatedData.imgUrl = img;
    if (year !== "") updatedData.year = year;
    if (time !== "") updatedData.time = time;
    if (author !== "") updatedData.author = author;
    if (category !== "") updatedData.category = category;

    axios
      .put(`http://localhost:4000/api/movies/${id}`, updatedData)
      .then(() => {
        console.log(`element ${id} updated`);

        setRefre(!refre);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(el.id);
  return (
    <div>
      <h1>{el.name}</h1>
      <form>
        <fieldset>
          <legend>updating Movies</legend>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="prenom">description:</label>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => {
              setdes(e.target.value);
            }}
          />
          <label htmlFor="text">Img:</label>
          <input
            type="text"
            placeholder="photo"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <label htmlFor="text">year:</label>

          <input
            type="text"
            placeholder="year"
            onChange={(e) => {
              setyear(e.target.value);
            }}
          />
          <label htmlFor="text">author:</label>

          <input
            type="text"
            placeholder="author"
            onChange={(e) => {
              setauthor(e.target.value);
            }}
          />
          <label htmlFor="text">category:</label>

          <input
            type="text"
            placeholder="category"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <label htmlFor="text">time:</label>

          <input
            type="text"
            placeholder="time"
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </fieldset>
        <button
          id="btn"
          onClick={() => {
            updaty(el.id);
            navigate("/get");
          }}
        >
          badel
        </button>
      </form>
    </div>
  );
};

export default One;

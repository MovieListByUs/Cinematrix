import axios from "axios";
import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Add.css";
const Adding = ({ refre, setRefre }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [des, setdes] = useState("");
  const [year, setyear] = useState("");
  const [time, settime] = useState("");
  const [author, setauthor] = useState("");
  const [category, setcategory] = useState("");
  const [img, setImg] = useState("");

  const add = () => {
    axios
      .post("http://localhost:4000/api/movies/add", {
        name: name,
        description: des,
        imgUrl: img,
        year: year,
        time: time,
        category: category,
        author: author,
      })
      .then(() => {
        console.log("added");
        setRefre(!refre);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <form>
        <fieldset>
          <legend>adding Movies</legend>
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
            add();
            navigate("/get");
            // redirect("/get");
          }}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Adding;

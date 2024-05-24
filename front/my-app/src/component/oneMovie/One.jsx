import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./One.css";
const One = ({ refre, setRefre, setData }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");

  const location = useLocation();
  const { el } = location.state;
  const navigate = useNavigate();
  const updaty = (id) => {
    axios
      .put(`http://localhost:4000/api/movies/${id}`, {
        name: name,
        description: des,
        imgUrl: img,
      })
      .then(() => {
        setRefre(!refre);
        console.log(`element ${id} updated`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1>{el.name}</h1>
      <p>{el.descrption}</p>
      <img className="uno" src={el.imgUrl} alt="" />

      <input
        type="text"
        className="update"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        className="update"
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />
      <input
        type="text"
        className="update"
        onChange={(e) => {
          setImg(e.target.value);
        }}
      />
      <button
        onClick={() => {
          updaty(el.id);

          navigate("/get");
        }}
      >
        badel
      </button>
    </div>
  );
};

export default One;

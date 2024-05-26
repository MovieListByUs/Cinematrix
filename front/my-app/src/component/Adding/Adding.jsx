

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Add.css";

const Adding = ({ refre, setRefre }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([
    {
      name: "",
      description: "",
      year: "",
      time: "",
      author: "",
      category: "",
      photo: null,
    },
  ]);

  const movieUpd = (i, e) => {
    const { name, value, files } = e.target;
    const newMovies = [...movies];
    if (files) {
      newMovies[i][name] = files[0];
    } else {
      newMovies[i][name] = value;
    }
    setMovies(newMovies);
  };

  // The movieUpd function updates a movie's details when you change any input field.
  // It takes the position of the movie in the list (index) and the event triggered by the input change (e).
  // First it gets the name, value, and files from the input that was changed. The name is the name of the
  // input field (like "name" or "description"), the value is what you typed, and files are any uploaded files
  // if it's a file input. It then makes a copy of the current movies list. It updates the specific movie's
  // property based on the input's name. If it's a file input, it stores the first file , if not it stores the value.
  // Finally, it updates the movies list with this new information, making the component re-render to
  // show the updated movie details.

  const addMovie = () => {
    setMovies([
      ...movies,
      {
        name: "",
        description: "",
        year: "",
        time: "",
        author: "",
        category: "",
        photo: null,
      },
    ]);
  };

  // The addMovie function adds a new empty movie object to the movies state array.

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const movie of movies) {
      const movieData = new FormData();
      movieData.append("name", movie.name);
      movieData.append("description", movie.description);
      movieData.append("photo", movie.photo);
      movieData.append("year", movie.year);
      movieData.append("time", movie.time);
      movieData.append("category", movie.category);
      movieData.append("author", movie.author);

      try {
        await axios.post("http://localhost:4000/api/movies/add", movieData);
        console.log(`Added ${movie.name}`);
        setRefre(!refre);
      } catch (err) {
        console.error(`Failed to add ${movie.name}:`, err);
      }
    }
    navigate("/get");
  };

  // The handleSubmit function works when the form is submitted.
  // It prevents the default form submission behavior, which reloads the page.
  // The function then loops through each movie in the movies array, creating a movieData object for each movie.
  // This movieData object includes the movie's name, description, photo, year, time, category, and author.
  // The function sends this data to the backend server using a POST request to the specified URL.
  // If the request is successful, it logs a message in the console and refreshes the data.
  // Finally, the function navigates to the "/get" page after all movies have been converted to movieData and sent to the backend.

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Adding Movies</legend>
          {movies.map((movie, i) => (
            <div key={i} className="movie-entry">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={movie.name}
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="description"> Description:</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={movie.description}
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="photo">Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="year">Year:</label>
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={movie.year}
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={movie.author}
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={movie.category}
                onChange={(e) => movieUpd(i, e)}
              />
              <label htmlFor="time">Time:</label>
              <input
                type="text"
                name="time"
                placeholder="Time"
                value={movie.time}
                onChange={(e) => movieUpd(i, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addMovie}>
            Add Another Movie
          </button>
        </fieldset>
        <button id="btn" type="submit">
          Add Movies
        </button>
      </form>
    </div>
  );
};

export default Adding;

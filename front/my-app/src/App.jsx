import { useEffect, useState } from "react";
import Login from "./component/home/Login";
import Signup from "./component/home/Signup";
import axios from "axios";
import Home from "./component/home/Home";
import Movies from "./component/movies/Movies";
import One from "./component/oneMovie/One";
import UserHome from "./component/user/UserHome";
import Cats from "./component/user/Cats";
import CatList from "./component/user/CatList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Adding from "./component/Adding/Adding";
import MovieDetails from "./component/user/MovieDetails";
import MyList from "./component/user/MyList";
// import MovieDetails from "./component/user/MovieDetails";

function App() {
  const [data, setData] = useState([]);
  const [refre, setRefre] = useState(false);
  const [addedMovies, setAddedMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movies/getAll")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, [refre]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Userhome" element={<UserHome />} />
          <Route exact path="/cats" element={<Cats />} />
          <Route exact path="/catList" element={<CatList />} />

          <Route
            exact
            path="/get"
            element={<Movies data={data} refre={refre} setRefre={setRefre} />}
          />
          <Route exact path="/oneMovie/:id" element={<Movies />} />
          <Route
            exact
            path="/add"
            element={<Adding refre={refre} setRefre={setRefre} />}
          />
          {/* <Route
            path="/movie"
            element={<MovieDetails setAddedMovies={setAddedMovies} />}
          /> */}
          <Route
            path="/movie"
            element={<MovieDetails setAddedMovies={setAddedMovies} />}
          />
          <Route
            path="/list"
            element={
              <MyList
                setAddedMovies={setAddedMovies}
                addedMovies={addedMovies}
              />
            }
          />
          <Route
            exact
            path="/one"
            element={<One />}
            refre={refre}
            setData={setData}
            setRefre={setRefre}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

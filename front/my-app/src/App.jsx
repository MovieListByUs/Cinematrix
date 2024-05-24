
import './App.css';
import Categories from './component/Category/Categories';
import Home from './component/home/Home';
import OneMovie from './component/oneMovie/OneMovie';
import MovieDetails from './component/MovieDetaills/MovieDetails';
import MyList from './component/Mylist/MyList';
import { useEffect, useState } from "react";
import Login from "./component/home/Login";
import Signup from "./component/home/Signup";
import axios from "axios";
import Home from "./component/home/Home";
import Movies from "./component/movies/Movies";
import One from "./component/oneMovie/One";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import Adding from "./component/Adding/Adding";
function App() {
  const [data, setData] = useState([]);
  const [refre, setRefre] = useState(false);
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
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
    </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/get"
            element={<Movies data={data} refre={refre} setRefre={setRefre} />}
          />
          <Route
            exact
            path="/add"
            element={<Adding refre={refre} setRefre={setRefre} />}
          />
          <Route
            exact
            path="/one"
            element={<One />}
            refre={refre}
            setData={setData}
            setRefre={setRefre}
          />
               <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
             <Route path="/" element={<Home />}></Route>
          <Route path="/cats" element={<Categories />}></Route>
          <Route path="/one" element={<OneMovie />}></Route>
          <Route path="/movie" element={<MovieDetails />}></Route>
          <Route path="/list" element={<MyList />}></Route>
        </Routes>
      </Router>
    </>


  );
}

export default App;

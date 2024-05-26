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
        {/* <div>
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
    </div> */}
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

import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./component/home/Home";
import Movies from "./component/movies/Movies";
import One from "./component/oneMovie/One";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            setRefre={setRefre}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

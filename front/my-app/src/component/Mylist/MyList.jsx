import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CiBookmarkRemove } from 'react-icons/ci';
import axios from 'axios';
function MyList({ addedMovies }) {
  console.log('hadd', addedMovies);
  const movieList = addedMovies || [];
  const [data, setdata] = useState([]);
  const [movie, setMovie] = useState([]);
  const [refresh,setRefresh]= useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movies/movies/${1}`)
      .then((response) => {
        console.log(response);
        setdata(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const removeFromMyList = (movieId) => {
    axios
      .delete(`http://localhost:4000/api/lista/delFrom/${movieId}`)
      .then(() => {
        const newnew = movie.filter((movie) => movie.id !== movieId);
        setMovie(newnew);
        setRefresh(!refresh)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h3>Movies Added to Your List</h3>

      {data.map((el, i) => (
        <div className="movie-container" key={i}>
          <img className="movie-img" src={el.imgUrl} alt="" />
          <div className="name-container">
            <h3 className="movie-name">{el.name}</h3>
            <button
              onClick={() => {
                removeFromMyList(el.id);
              }}
            >
              <CiBookmarkRemove />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyList;

import { useLocation } from 'react-router-dom';

function MyList({addedMovies}) {
console.log(addedMovies);
  const movieList = addedMovies || [];

  return (
    <div>
      <h3>Movies Added to Your List</h3>

      {movieList.map((el, i) => (
        <div className="movie-container" key={i}>
          <img className="movie-img" src={el.imgUrl} alt="" />
          <div className="name-container">
            <h3 className="movie-name">{el.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyList;

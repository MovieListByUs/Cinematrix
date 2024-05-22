import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const { elem } = location.state;
  return (
    <div className='details'>
      <h2 id='name'>{elem.name}</h2>
      <img src={elem.imgUrl} alt=""  id='img'/>
          <p id='duration'>Duration: {elem.time}</p>
          <p id='age'>Year of release: {elem.age}</p>
    </div>
  );
}

export default MovieDetails;

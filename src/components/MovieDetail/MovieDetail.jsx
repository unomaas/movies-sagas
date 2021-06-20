import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetail() {

  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
    // ⬇ GET on page load:
    useEffect(() => {
      dispatch({ type: 'FETCH_MOVIE_DETAILS' });
    }, []);

  //#region ⬇⬇ Event handlers below:
  const handleEdit = () => {
    console.log('In handleEdit, movie ID:', movie.id);
    // ⬇ Dispatch to the detail reducer:
    // dispatch({ type: 'SET_MOVIE_DETAIL', payload: movie });
    // ⬇ Navigate user to detailed view: 
    // history.push('/detail');
  } // End handleDetail
  //#endregion ⬆⬆ Event handles above. 

  console.log('Movie Detail is:', movieDetail);
  return (
    <div>
      <div className="movies-item" key={movieDetail.id} onClick={handleEdit}>

        <div className="movies-title">
          <p>{movieDetail.title}</p>
        </div>

        <img
          className="movies-image"
          src={movieDetail.poster}
          alt={movieDetail.title}
        />

      </div>
    </div>
  )
}

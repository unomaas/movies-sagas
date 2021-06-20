import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


export default function MovieDetail() {

  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
    // ⬇ GET on page load:
    // useEffect(() => {
    //   dispatch({ type: 'FETCH_SINGLE_MOVIE' });
    // }, []);

  const {id} = useParams();

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
  console.log('useParams id:', id);
  return (
    <div>
      <div key={movieDetail[0].id} >

        <div className="movies-title">
          <h3>{movieDetail[0].title}</h3>
        </div>

        <img
          className="movies-image"
          src={movieDetail[0].poster}
          alt={movieDetail[0].title}
        />

        <div>
          <h3>Description:</h3>
          <p>{movieDetail[0].description}</p>
        </div>

        <div>
          <h3>Genres:</h3>
          <p>{movieDetail[0].array_agg}</p>
        </div>

      </div>
    </div>
  )
}

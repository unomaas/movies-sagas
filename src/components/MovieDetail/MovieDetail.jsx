import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


export default function MovieDetail() {

  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
  // const { id } = useParams();
  // ⬇ GET on page load:
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_SINGLE_MOVIE' });
  // }, []);


  //#region ⬇⬇ Event handlers below:
  // const handleEdit = () => {
  //   console.log('In handleEdit, movie ID:', movie.id);
  //   ⬇ Dispatch to the detail reducer:
  //   dispatch({ type: 'SET_MOVIE_DETAIL', payload: movie });
  //   ⬇ Navigate user to detailed view: 
  //   history.push('/detail');
  // } // End handleDetail
  //#endregion ⬆⬆ Event handles above. 


  return (
    <div>
      <div key={movieDetail[0].id}>

        <div className="movies-title">
          <h2>{movieDetail[0].title}</h2>
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

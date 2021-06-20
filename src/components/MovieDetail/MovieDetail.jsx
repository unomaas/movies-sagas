//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './MovieDetail.css';
// ⬇ Dependent functionality:
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
//#endregion ⬆⬆ Document setup above. 


export default function MovieDetail() {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
  // ⬇ Commented out for stretch goals: 
    // const { id } = useParams();
    // ⬇ GET on page load:
    // useEffect(() => {
    //   dispatch({ type: 'FETCH_SINGLE_MOVIE' });
    // }, []);
  //#endregion ⬆⬆ All state variables above. 


  // ⬇ Commented out for stretch goals: 
    //#region ⬇⬇ Event handlers below:
    // const handleEdit = () => {
    //   console.log('In handleEdit, movie ID:', movie.id);
    //   ⬇ Dispatch to the detail reducer:
    //   dispatch({ type: 'SET_MOVIE_DETAIL', payload: movie });
    //   ⬇ Navigate user to detailed view: 
    //   history.push('/detail');
    // } // End handleDetail
    //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="MovieDetail-wrapper" key={movieDetail[0]?.id}>

      <div className="movies-title">
        <h2>{movieDetail[0]?.title}</h2>
      </div>

      <img
        className="movies-image"
        src={movieDetail[0]?.poster}
        alt={movieDetail[0]?.title}
      />

      <div className="MovieDetail-description">
        <h3>Description:</h3>
        <p>{movieDetail[0]?.description}</p>
        <h3>Genres:</h3>
        <p>{movieDetail[0]?.array_agg}</p>
      </div>

    </div>
  ) // End return 
} // End MovieDetail

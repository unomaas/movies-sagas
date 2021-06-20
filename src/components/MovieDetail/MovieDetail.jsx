//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './MovieDetail.css';
// ⬇ Dependent functionality:
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//#endregion ⬆⬆ Document setup above. 


export default function MovieDetail() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const movieDetail = useSelector((store) => store.movieDetail);
  // ⬇ Commented out for later updates: 
  // const { id } = useParams();
  // ⬇ GET on page load:
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_SINGLE_MOVIE' });
  // }, []);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  // ⬇ Commented out for later updates: 
    // const dispatch = useDispatch();
    // const handleEdit = () => {
    //   console.log('In handleEdit, movie ID:', movie.id);
    //   ⬇ Dispatch to the detail reducer:
    //   dispatch({ type: 'SET_MOVIE_DETAIL', payload: movie });
    //   ⬇ Navigate user to detailed view: 
    //   history.push('/detail');
  // } // End handleDetail

  /** ⬇ handleBack:
   * When clicked, this will send the user to the home page. 
   */
  const handleBack = () => {
    history.push('/');
  } // End handleBack
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

      <div>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          <ArrowBackIcon />
        </Button>
      </div>

    </div>
  ) // End return 
} // End MovieDetail

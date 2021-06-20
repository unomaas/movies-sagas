//#region ⬇⬇ Document setup below: 
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//#endregion ⬆⬆ Document setup above. 


export default function MovieItem({ movie }) {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleDetail:
   * When clicked, this will send the user to the details view page. 
   */
  const handleDetail = () => {
    console.log('In handleDetail, movie title:', movie?.title);
    // ⬇ Dispatch to the detail reducer:
    dispatch({ type: 'FETCH_SINGLE_MOVIE', payload: movie });
    // ⬇ Navigate user to detailed view: 
    history.push(`/detail/${movie.id}`);
  } // End handleDetail
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="movies-item" key={movie?.id} onClick={handleDetail}>

      <div className="movies-title">
        <p>{movie?.title}</p>
      </div>

      <img
        className="movies-image"
        src={movie?.poster}
        alt={movie?.title}
      />

    </div>
  ) // End return
} // End MovieItem
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


  return (
    <section>
      <h1> Test </h1>
    </section>
  )
}

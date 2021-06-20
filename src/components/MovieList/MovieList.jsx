//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
// ⬇ Dependent functionality:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//#endregion ⬆⬆ Document setup above. 


export default function MovieList() {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  // ⬇ GET on page load:
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);
  //#endregion ⬆⬆ All state variables above. 


  // ⬇ Rendering:
  return (
    <main>

      <h1>Your Movie List</h1>

      <section className="movies-list">
        {movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />
        })}
      </section>

    </main>
  ) // End return
} // End MovieList
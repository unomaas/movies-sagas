import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      
      <h2>Here's Your Movie List</h2>

      <section className="movies">
        {movies.map(movie => {
          return (
            <div key={movie.id} >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>

    </main>
  );
}

export default MovieList;
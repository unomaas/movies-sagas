//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './MovieList.css'
// ⬇ Dependent functionality:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//#endregion ⬆⬆ Document setup above. 


function MovieList() {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  // ⬇ GET on page load:
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  const handleDetail = () => {
    console.log('In handleDetail');

  } // End handleDetail
  //#endregion ⬆⬆ Event handles above. 


  return (
    <main>

      <h1>Your Movie List</h1>

      <section className="movies-list">
        {movies.map(movie => {
          return (
            <div className="movies-item" key={movie.id} onClick={handleDetail}>

              <div className="movies-title">
                <p>{movie.title}</p>
              </div>

              <img
                className="movies-image"
                src={movie.poster}
                alt={movie.title}
              />

            </div>
          );
        })}
      </section>

    </main>
  );
}

export default MovieList;
//#region ⬇⬇ All document setup, below:
// ⬇ App & index Setup:
import './index.css';
import App from './components/App/App.js';
// ⬇ React/Redux Setup:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// ⬇ Middleware Setup:
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// ⬇ Saga Setup:
import { takeEvery, put } from 'redux-saga/effects';
// ⬇ Server Calls Setup:
import axios from 'axios';
// ⬇ Font setup:
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff2'
//#endregion ⬆⬆ All document setup above.


//#region ⬇⬇ All Saga functions, below:
// ⬇ rootSaga generator function:
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('ADD_MOVIE', addMovie)
} // End rootSaga

// ⬇ fetAllMovies Saga:
function* fetchAllMovies() {
  console.log('In fetchAllMovies Saga');
  try {
    // ⬇ Calling to server to load data:
    const movies = yield axios.get('/api/movie');
    console.log('In axios.get, movies:', movies.data);
    // ⬇ Sending the data from the server to the reducer to hold:
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } // End try
  catch {
    console.error('Error in GET movies:', error);
  } // End catch
} // End fetchAllMovies Saga

function* addMovie(action) {
  console.log('In addMovie Saga, action:', action.payload);
  try {
    // ⬇ Sending movie to add to server:
    yield axios.post('api/movie', action.payload);
    // ⬇ GET to refresh data:
    yield put({ type: 'FETCH_MOVIES' });
  } // End try
  catch (error) {
    console.error('Error with /api/movie:', error)
  } // End catch
} // End addMovie

//#endregion ⬆⬆ All Saga functions above. 


//#region ⬇⬇ All Reducer functions, below:
// ⬇ movies Reducer:
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  } // End switch
} // End movies Reducer

// ⬇ genres Reducer:
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  } // End switch
} // End genres Reducer
//#endregion ⬆⬆ All Reducer functions above. 


//#region ⬇⬇ All Store & Middleware setup, below:
// ⬇ Create sagaMiddleware:
const sagaMiddleware = createSagaMiddleware();

// ⬇ Create one store to rule them all:
const storeInstance = createStore(
  combineReducers({ movies, genres }),
  applyMiddleware(sagaMiddleware, logger),
); // End store

// ⬇ Pass rootSaga into our sagaMiddleware:
sagaMiddleware.run(rootSaga);

// ⬇ Rendering:
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); // End render
//#endregion ⬆⬆ All Store & Middleware setup above.
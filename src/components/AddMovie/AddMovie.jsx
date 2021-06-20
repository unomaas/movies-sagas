//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './AddMovie.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
//#endregion ⬆⬆ Document setup above. 


export default function AddMovie() {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [movie, setMovie] = useState({});
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleChange:
   * When the user types, this will set their input to the movie object with keys for each field. 
   */
  const handleChange = (key, value) => {
    console.log('In handleChange, key:', key);
    setMovie({ ...movie, [key]: value })
  } // End handleChange

  /** ⬇ handleSubmit:
   * When clicked, this will submit the new movie to the DB and send the user back to the home page. 
   */
  const handleSubmit = event => {
    console.log('In handleSubmit, movie:', movie);
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ Sending newPlant to our reducer: 
    dispatch({ type: 'ADD_MOVIE', payload: movie }); // movie is already an object, defined above. 
    // ⬇ Send user back to home:
    history.push('/');
  } // End handleSubmit

  /** ⬇ handleCancel:
   * When clicked, this will send the user to the home page. 
   */
  const handleCancel = () => {
    history.push('/');
  } // End handleCancel
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="AddMovie-wrapper">

      <h1>Add a New Movie</h1>

      <div className="AddMovie-form">

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Movie Title: </label>
          <TextField
            name="title"
            onChange={event => handleChange('title', event.target.value)}
            defaultValue=""
            required
            helperText="Required"
          /> <br />

          <label htmlFor="poster">Image URL: </label>
          <TextField
            name="poster"
            onChange={event => handleChange('poster', event.target.value)}
            defaultValue=""
            required
            helperText="Required"
          /> <br />

          <label htmlFor="description">Description: </label>
          <TextField
            name="description"
            onChange={event => handleChange('description', event.target.value)}
            defaultValue=""
            required
            helperText="Required"
          /> <br />

          <label htmlFor="genre_id">Genre: </label>
          <TextField
            name="genre_id"
            onChange={event => handleChange('genre_id', event.target.value)}
            defaultValue=""
            select
            required
            helperText="Required"
          >
            <MenuItem value='1'>Adventure</MenuItem>
            <MenuItem value='2'>Animated</MenuItem>
            <MenuItem value='3'>Biographical</MenuItem>
            <MenuItem value='4'>Comedy</MenuItem>
            <MenuItem value='5'>Disaster</MenuItem>
            <MenuItem value='6'>Drama</MenuItem>
            <MenuItem value='7'>Epic</MenuItem>
            <MenuItem value='8'>Fantasy</MenuItem>
            <MenuItem value='9'>Musical</MenuItem>
            <MenuItem value='10'>Romantic</MenuItem>
            <MenuItem value='11'>Science Fiction</MenuItem>
            <MenuItem value='12'>Space-Opera</MenuItem>
            <MenuItem value='13'>Superhero</MenuItem>
          </TextField> <br />

          <Button
            onClick={handleCancel}
            variant="outlined"
            color="secondary"
          >
            <ArrowBackIcon />
          </Button> &nbsp;

          <Button
            type="submit"
            variant="outlined"
            color="primary"
          >
            <CheckCircleOutlineIcon />
          </Button>
        </form>

      </div>

    </div>
  ) // End return
} // End Add Movie

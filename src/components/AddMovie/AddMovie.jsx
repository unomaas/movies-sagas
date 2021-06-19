//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './AddMovie.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ Sending newPlant to our reducer: 
    dispatch({ type: 'ADD_MOVIE', payload: movie }); // movie is already an object, defined above. 
    // ⬇ Clear inputs after submit:
    setMovie({ title: '', poster: '', clade: '', order: '', family: '', subfamily: '', genus: '' });
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

      <h2>Add a New Movie</h2>

      <div className="AddMovie-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Movie Title: </label>
          <TextField
            name="title"
            onChange={event => handleChange('title', event.target.value)}
            defaultValue=""
            value={movie.title}
            required
            helperText="Required"
          /> <br />

          <label htmlFor="image">Image URL: </label>
          <TextField
            name="image"
            onChange={event => handleChange('poster', event.target.value)}
            defaultValue=""
            value={movie.title}
            required
            helperText="Required"
          /> <br />

          <TextField
            required
            select
            defaultValue=""
            onChange={event => setFeeling(event.target.value)}
            helperText="Required"
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
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

//#region ⬇⬇ All document setup below:
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//#endregion ⬆⬆ All document setup above. 


//#region ⬇⬇ All CRUD routes below:
/** ⬇ GET /api/movie:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull all of the entries from the DB to update on the DOM.
 */
router.get('/', (req, res) => {
  console.log('In api/movie GET');
  // ⬇ Declaring SQL commands to send to DB: 
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  // ⬇ Sending query to DB:
  pool.query(query)
    .then(result => {
      console.log('In /movie GET, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows);
    }) // End .then
    .catch(error => {
      console.error('Error in /movie GET:', error);
      res.sendStatus(500)
    }); // End .catch
}); // End GET

/** ⬇ GET /api/movie/:id:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull JUST ONE of the entries from the DB to update on the DOM for detailed view.
 */
router.get('/:id', (req, res) => {
  console.log('In api/movie/:id GET');
  // ⬇ Declaring SQL commands to send to DB: 
  const query = `
    SELECT ARRAY_AGG ("genres".name), "movies".* FROM "movies"
    JOIN "movies_genres" ON "movies_genres".movie_id = "movies".id
    JOIN "genres" ON "movies_genres".genre_id = "genres".id
    WHERE "movies".id = $1
    GROUP BY "movies".id;
  `;
  const movieId = req.params.id;
  // ⬇ Sending query to DB:
  pool.query(query, [movieId])
    .then(result => {
      console.log('In /movie/:id GET, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows);
    }) // End .then
    .catch(error => {
      console.error('Error in /movie/:id GET:', error);
      res.sendStatus(500)
    }); // End .catch
}); // End GET

/** ⬇ POST /api/movie:
 * Router function to handle the POST part of the server-side logic.  Will send SQL query to add new entries to the DB.
 */
router.post('/', (req, res) => {
  console.log('In api/movie POST, req.body:', req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
    INSERT INTO "movies" ("title", "poster", "description")
    VALUES ($1, $2, $3)
    RETURNING "id";
  `; // End insertMovieQuery
  // ⬇ FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
      // ⬇ Declaring SQL commands to send to DB: 
      const createdMovieId = result.rows[0].id
      // Now handle the genre reference
      const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" ("movie_id", "genre_id")
        VALUES  ($1, $2);
      `; // End insertMovieGenreQuery
      // ⬇ SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE:
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
        .then(result => {
          // ⬇ Now that both are done, send back success!
          res.sendStatus(201);
        }) // End .then
        // ⬇ Catch for second query:
        .catch(err => {
          console.log(err);
          res.sendStatus(500)
        }); // End .catch
    }) // End .then
    // ⬇ Catch for first query:
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    }); // End .catch
}) // End POST
//#endregion ⬆⬆ All CRUD routes above. 


module.exports = router;
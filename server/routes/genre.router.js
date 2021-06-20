const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('In /genre GET');
  // ⬇ Declaring SQL commands to send to DB: 
  const query = `SELECT * from "genres" ORDER BY "name" ASC;`;
  // Might have to figure out AGG to pull genre data. 
  pool.query(query)
    .then(result => {
      console.log('In /genre GET, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows);
    }) // End .then
    .catch(error => {
      console.error('In /genre GET, error:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
}); // End /genre GET

module.exports = router;
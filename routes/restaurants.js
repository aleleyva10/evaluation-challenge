var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

var config = {
  database: 'omega',
  host: 'localhost',
  port: 5432, // default port for postico
  max: 20
};

var pool = new pg.Pool(config);


// gets all info from the database
router.get('/restaurants', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM pizza_info ORDER BY id DESC;', function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

module.exports = router;

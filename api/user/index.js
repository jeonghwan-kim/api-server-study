var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  res.send('post /users');
});

router.get('/me', function (req, res) {
  res.send('get /users/me');
});

router.get('/', function (req, res) {
  res.status(400).send('get /users');
});


router.put('/', function (req, res) {
  res.send('put /users');
});

router.delete('/', function (req, res) {
  res.send('delete /users');
});

module.exports = router;

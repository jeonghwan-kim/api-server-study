var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  res.status(201).json({
    user: {
      name: req.body.name
    }
  });
});

router.get('/me', function (req, res) {
  res.send('get /users/me');
});

router.get('/', function (req, res) {
  res.json({
    foo: 'bar'
  });
});


router.put('/', function (req, res) {
  res.send('put /users');
});

router.delete('/', function (req, res) {
  res.status(204).send('delete /users');
});

module.exports = router;

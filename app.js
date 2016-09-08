var express = require('express');
var app = express();
var user = require('./api/user/index.js');

app.use('/users', user);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
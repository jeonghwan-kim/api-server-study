var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var user = require('./api/user/index.js');

app.use(logger('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urle

app.use('/users', user);
app.get('/swagger.json', function (req, res) {
  res.json(require('./api-doc'));
});
app.use('/', express.static('swagger-ui'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
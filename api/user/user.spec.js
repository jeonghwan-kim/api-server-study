var should = require('should');
var request = require('supertest');
var app = require('../../app.js');

describe('GET /users', function () {

  it('should return string', function (done) {
    request(app)
        .get('/users')
        .expect(400)
        .end(function (err, res) {
          if (err) throw err;

          console.log(res.body);
          done();
        });
  });

});

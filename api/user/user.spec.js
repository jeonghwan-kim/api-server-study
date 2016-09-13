var should = require('should');
var request = require('supertest');
var app = require('../../app.js');

describe('GET /users', function () {

  it('should return string', function (done) {
    request(app)
        .get('/users')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;

          res.body.foo.should.be.equal('bar');
          done();
        });
  });

});


describe('GET /users/me', function () {

  it('should return 200 status code', function (done) {
    request(app)
        .get('/users/me')
        .expect(200)
        .end(function(err, res) {
          done();
        });
  });

});

describe('POST /users', function () {

  it('should return 201 status code', function (done) {
    request(app)
        .post('/users')
        .expect(201)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
  });

});

describe('PUT /users', function () {

  it('should return 200 status code', function (done) {
    request(app)
        .put('/users')
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
  });

});

describe('DELETE /users', function () {

  it('should return 204 status code', function (done) {
    request(app)
        .delete('/users')
        .expect(204)
        .end(function(err, res) {
          if (err) throw err;
          done();
        });
  });

});
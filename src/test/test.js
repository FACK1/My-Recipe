const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('1. Tape Test', (t) => {
  t.equal(1, 1, 'Should Be Equal!');
  t.end();
});

test('2. All routes should return the expected results', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect(['Content-Type'], 'text/html; charset=utf-8', 'Done !')
    .end((err) => {
      t.error(err);
      t.end();
    });
});

test('3. This routes should return the expected recipes Html', (t) => {
  request(app)
    .get('/recipe/1')
    .expect(200)
    .expect(['Content-Type'], 'text/html; charset=utf-8', 'The Result should Be HTML ')
    .end((err) => {
      t.error(err);
      t.end();
    });
});

test('Check status code is 404', (t) => {
  request(app)
    .get('/pageNotFound')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, 'response should be 404');
      t.end();
    });
});


test.onFinish(() => process.exit(0));

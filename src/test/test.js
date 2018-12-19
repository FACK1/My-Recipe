const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('Tape Test',t => {
  t.equal(1,1,"Should Be Equal!")
  t.end();
})

test('All routes should return the expected results', t => {
  request(app)
    .get('/')
    .expect(200)
    .expect(['Content-Type'],'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('Check status code is 404', (t) => {
  request(app)
    .get('/pageNotFound')
    .expect(404)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 404 , 'response should be 404');
      t.end();
    });
});


test.onFinish(() => process.exit(0));

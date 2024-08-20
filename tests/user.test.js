const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const db = require('../models');

chai.use(chaiHttp);
chai.should();

describe('User API', () => {
  before(async () => {
    await db.sequelize.sync({ force: true });
  });

  describe('POST /users/register', () => {
    it('should register a user', (done) => {
      chai.request(app)
        .post('/users/register')
        .send({ username: 'testuser', password: 'password' })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('id');
          done();
        });
    });
  });

  describe('POST /users/login', () => {
    it('should login a user', (done) => {
      chai.request(app)
        .post('/users/login')
        .send({ username: 'testuser', password: 'password' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('token');
          done();
        });
    });
  });
});
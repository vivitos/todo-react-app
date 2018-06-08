const mongoose = require('mongoose');
const Todos = require('../models/todos');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

describe('Todos', () => {
	let mongoId;

	it('it should GET all todos', (done) => {
		chai.request(server)
			.get('/api/todos')
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				assert(Array.isArray(res.body), 'Response should be an array');
				done();
			});
	});


	it('it should return 400', (done) => {
		chai.request(server)
			.post('/api/todos')
			.send({})
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);
				done();
			});
	});

	it('it should add a todo', (done) => {
		chai.request(server)
			.post('/api/todos')
			.send({ label: 'Todo test', done: false })
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('label', 'Todo test');
				expect(res.body).to.have.property('done', false);
				expect(res.body).to.have.property('id');

				mongoId = res.body.id;

				done();
			});
	});

	it('it should update the todo', (done) => {
		chai.request(server)
			.put(`/api/todos/${mongoId}`)
			.send({ label: 'Todo modified', done: true })
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('label', 'Todo modified');
				expect(res.body).to.have.property('done', true);
				done();
			})
	})

	it('it should delete the created todo', (done) => {
		chai.request(server)
			.delete(`/api/todos/${mongoId}`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
	});
});



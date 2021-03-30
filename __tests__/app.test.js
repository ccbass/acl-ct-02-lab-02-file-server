const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('Returns "hi" on GET /', async() => {
        const res = await request(app)
            .get('/');

        expect(res.text).toEqual('hi');
    });

    it('Echoes req.body and returns 200 on POST /', async() => {
        const body = { 'someData': 'this is in a body!' };

        const res = await request(app)
            .post('/')
            .send(body);

        expect(res.text).toEqual(JSON.stringify(body));
    });

    it('Returns the color on GET /color', async() => {
        const res = await request(app)
            .get('/red');

        expect(res.text).toEqual('<!DOCTYPE html><html><body><h1>red</h1></body></html>');
    });

});

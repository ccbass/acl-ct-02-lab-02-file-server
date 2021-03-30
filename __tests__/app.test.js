const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('Returns "hi" on GET /', async() => {
        const res = await request(app)
            .get('/');

        expect(res.text).toEqual('hi');
        expect(res.statusCode).toEqual(200);
    });

    it('Echoes req.body and returns 200 on POST /', async() => {
        const body = { 'someData': 'this is in a body!' };

        const res = await request(app)
            .post('/echo')
            .send(body);

        expect(res.text).toEqual(JSON.stringify(body));
        expect(res.statusCode).toEqual(200);
    });

    it('Returns the color on GET /color', async() => {
        const res = await request(app)
            .get('/red');

        expect(res.text).toEqual('<!DOCTYPE html><html><body><h1>red</h1></body></html>');
        expect(res.statusCode).toEqual(200);
    });

    it('Responds 404 to incorrect routes', async() => {
        const res = await request(app)
            .get('/purple');

        expect(res.statusCode).toEqual(404);
    });

});

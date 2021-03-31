/* eslint-disable indent */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('Returns the file on a valid GET URL', async() => {
        const res = await request(app)
            .get('/index.html');

        expect(res.text).toEqual('<body><h1>hello, this is index</h1></body>');
        expect(res.statusCode).toEqual(200);
    });

    it('Returns 404 on valid URL, missing file', async() => {
        const res = await request(app)
            .get('/missingfile.html');

        expect(res.text).toEqual('');
        expect(res.statusCode).toEqual(404);
    });

    it('Returns 404 on invalid URL', async() => {
        const res = await request(app)
            .get('/secrets/index.html');

        expect(res.text).toEqual('');
        expect(res.statusCode).toEqual(404);
    });

});

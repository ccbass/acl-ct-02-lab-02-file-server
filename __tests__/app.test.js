/* eslint-disable indent */
const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('Returns the file on a valid GET URL', async() => {
        const res = await request(app)
            .get('/index.html');

        expect(res.text).toEqual(
    `<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <title>Index</title>\r
</head>\r
<body>\r
    <h1>This is an HTML document!</h1>\r
</body>\r
</html>`
        );
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

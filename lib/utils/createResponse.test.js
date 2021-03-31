/* eslint-disable indent */
const createResponse = require('./createResponse');

describe('createResponse', () => {
    it('Generates a response for an invalid URL', async() => {
        const response = await createResponse({});

        expect(response).toEqual(
`HTTP/1.1 404 Not Found
Accept-Ranges: bytes
Content-Length: 0
Content-Type: text/html\r
\r
`
        );
    });

    it('Generates a response for a valid URL and invalid file', async() => {
        const args = { path: '/indexx.html',  validUrl: true };
        const response = await createResponse(args);

        expect(response).toEqual(
`HTTP/1.1 404 Not Found
Accept-Ranges: bytes
Content-Length: 0
Content-Type: text/html\r
\r
`
        );
    });

    it('Generates a response for a valid URL and valid file', async() => {
        const response = await createResponse({ path: 'index.html', validUrl: true });

        expect(response).toEqual(
`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 42
Content-Type: text/html\r
\r
<body><h1>hello, this is index</h1></body>`
        );
    });
});

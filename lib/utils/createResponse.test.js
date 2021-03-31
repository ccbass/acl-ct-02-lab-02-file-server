const createResponse = require('./createResponse');

describe('createResponse', () => {
    it('Generates a response for an invalid URL', async () => {
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
Content-Length: 170
Content-Type: text/html\r
\r
<!DOCTYPE html>\r
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
    });
});

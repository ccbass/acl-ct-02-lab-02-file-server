const parseRequest = require('./parseRequest');

describe('parseRequest', () => {
    it('Parses a valid GET path request', () => {
        const rawRequest = `GET /index.html HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`;
        const request = parseRequest(rawRequest);

        expect(request).toEqual({
            method: 'GET',
            path: '/index.html',
            validUrl: true
        });
    });


    it('Parses an invalid GET path request', () => {
        const rawRequest = `GET /../secretfiles/index.html HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`;
        const request = parseRequest(rawRequest);

        expect(request).toEqual({
            method: 'GET',
            path: '/../secretfiles/index.html',
            validUrl: false
        });
    });

});

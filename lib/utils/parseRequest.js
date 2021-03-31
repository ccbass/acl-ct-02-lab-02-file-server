module.exports = rawRequest => {
    const [requestHeaders] = rawRequest.split('\r\n\r\n');

    const splitHeaders = requestHeaders.split('\r\n');

    const [method, path] = splitHeaders[0].split(' ');

    const validUrl = path.slice(1) === path.match(/([-a-zA-Z0-9]+)\.([a-z]+)/g)[0];

    return { method, path, validUrl };

   
};

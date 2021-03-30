module.exports = rawRequest => {
    const [requestHeaders, body] = rawRequest.split('\r\n\r\n');

    const cleanHeaders = requestHeaders.split('\r\n');

    const [method, path] = cleanHeaders[0].split(' ');

    return { method, path, body };

   
};

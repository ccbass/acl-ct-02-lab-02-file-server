module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
    const formatted =
`HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}\r
\r
${body}`;
    
    
    return formatted;
};

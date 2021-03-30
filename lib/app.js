const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const request = parseRequest(data.toString());

        if(request.method === 'GET' && request.path.length === 1){
            socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/html' }));
        }

        else if(request.method === 'POST' && request.path === '/echo'){
            socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/html' }));
        }

        else if(request.method === 'GET' && ['/red', '/green', '/blue'].includes(request.path)){
            socket.end(createResponse({ body: `<!DOCTYPE html><html><body><h1>${request.path.slice(1)}</h1></body></html>`, status: '200 OK', contentType: 'text/html' }));
        }

        else {
            socket.end(createResponse({ status: '404 Not Found' }));
        }
    });
});

module.exports = app;

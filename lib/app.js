const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const request = parseRequest(data.toString());
        console.log(request);

        if(request.method === 'GET' && request.validRoute === true){
            socket.end(createResponse({ body: request.path }));
        }
        
        else {
            socket.end(createResponse({ status: '404 Not Found' }));
        }
    });
});

module.exports = app;

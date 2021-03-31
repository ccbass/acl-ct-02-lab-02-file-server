const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
    socket.on('data', async data => {
        const request = parseRequest(data.toString());

        if(request.method === 'GET' && request.validUrl === true){
            socket.end(await createResponse({ path: request.path, validUrl: true }));
        }
        
        else {
            socket.end(await createResponse({}));
        }
    });
});

module.exports = app;

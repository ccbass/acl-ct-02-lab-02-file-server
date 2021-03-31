const fs = require('fs').promises;

const pathFn = require('path');




const makeResponse = async({ path = '', contentType = 'text/html', validUrl = false }) => {
    
    const absolutePath = pathFn.resolve(__dirname, `../../public/${path}`);


    const generateResponse = (path = '', status = '404 Not Found') => {
        return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${path.length}
Content-Type: ${contentType}\r
\r
${path}`;
    };


    const checkFile = async(resolvedPath) => {
        try {
            const files = await fs.readFile(resolvedPath, 'utf-8');
            return files;
        } catch(err) {
            return 'invalid/missing';
        }
    };


    if(!validUrl || await checkFile(absolutePath) === 'invalid/missing'){
        return generateResponse();
    }
    else {
        return generateResponse(await checkFile(absolutePath), '200 OK');
    }




};

module.exports = makeResponse;

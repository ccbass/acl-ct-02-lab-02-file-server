module.exports = rawRequest => {


    const [request, ...rest] = rawRequest.split('\n');
    const [method, path] = request.trim().split(' ');

    const body = rest.slice(-1)[0][0] !== '{' ? null : rest.slice(-1)[0];
    // const bodyType = JSON.parse(body);


    if(!body){
        return { method, path };
    } else {
        return { method, path, body };
    }

    
    // better parsing that doesn't pass below
    // const [request, ...rest] = rawRequest.split('\n');
    // const [method, route] = request.trim().split(' ');
    // const json = JSON.parse(rest.slice(-1)[0]);

    // const param = route.length > 1 ? route.split('/')[1] : null;
    
    // return { method, route, param, json };
};

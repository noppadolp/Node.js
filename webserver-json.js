const http = require('http');
const port = 8686;

function randomInt(low, high){
    return Math.floor(Math.random() * (high - low) + low);
}

http.createServer(function(req, res){
    console.log('New incoming client request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    switch(req.url){
        case '/temperature' :
            res.write('{"temperature" :' + randomInt(27, 40) + '}');
            break;
        case '/light' :
            res.write('{"light" :' + randomInt(1, 100) + '}');
            break;
        default :
            res.write('{"hello": "world"}');
    }
    res.end();
}).listen(port);
console.log('Server listening on http://localhost:' + port);
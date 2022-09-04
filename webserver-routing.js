var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url === '/home' || req.url === '/' || req.url === '/page-one'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let myfirstpage = fs.createReadStream(__dirname + "/" + 'page-one.html','utf-8');
        myfirstpage.pipe(res);
    }
    else if(req.url === '/page-two'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let mysecondpage = fs.createReadStream(__dirname + "/" + 'page-two.html','utf-8');
        mysecondpage.pipe(res);
    }
    else if(req.url === '/page-three'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let mythirdpage = fs.createReadStream(__dirname + "/" + 'page-three.html','utf-8');
        mythirdpage.pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        let notfound = fs.createReadStream(__dirname+"/" +'not-found.html','utf-8');
        notfound.pipe(res);
    }
}).listen(8080);
console.log('The simple routing webserver started');
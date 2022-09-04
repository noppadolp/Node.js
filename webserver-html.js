var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200,{ 'Content-Type': 'text/html'});
    var myhtml = fs.createReadStream(__dirname+"/"+'currency-completed.html','utf-8');
    myhtml.pipe(res);
}).listen(8081);
console.log('The simple html webserver started!');
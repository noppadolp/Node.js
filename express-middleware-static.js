const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
// middleware 1
app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});
// middleware 2
app.use(express.static(path.resolve(__dirname, "public")));
// middleware 3
app.use(function(req, res) {
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    res.end("404 File not found!");
});
app.listen(port, function() {
    console.log('Express middleware example');
});
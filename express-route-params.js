const express = require('express');
const app = express();
const port = 8081;

app.get('/', function (req, res) {
    res.send("<h1>Hello, world</h1>");
});

app.get('/params/:id', function (req, res) {
    res.send("<h1>Express params: " + req.params.id + "</h1>");
})

app.get('/devices/params/:id', function (req, res) {
    res.send("<h1> Devices params: " + req.params.id + "</h1>");
})

app.listen(port, function(){
    console.log('Example express params');
});

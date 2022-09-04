const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
    res.send('<h1>Home page</h1>');
});

app.get('/about', function (req, res) {
    res.send('<h1>About page</h1>');
});

app.listen(8080, function () {
    console.log('Express middleware example');
})
const express = require('express');
const app = express();
const port = 8080;

app.get('/', function(req, res){
    res.send("<h1>Hello,world</h1>");
});

app.listen(port, function(){
    console.log(`Example express listening at http://localhost:${port}`);
});

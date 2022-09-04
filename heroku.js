const express = require('express');
const { RSA_NO_PADDING } = require('node:constants');
const app = express();
const port = process.env.PORT || 4000;
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken;
    reply(reply_token);
    res.sendStatus(200);
});

app.get('/',function(req, res) {
    res.send("<h1>Hello, Heroku</h1>");
})
app.listen(port);

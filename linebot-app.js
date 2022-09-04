const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken;
    reply(reply_token);
    res.sendStatus(200);
})
app.listen(port);
function reply(reply_token) {
    // The tokens for education are used as an example only. the publisher has confirmed.
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {oYI7I1fjafeO9iMuFAD+tR3YVj0PkxrPM1BJBZbgvMHy2fFJuxlFJeckNoW2chslM3u1qGzmp685dkRMimmuGzp6S+YLTP+mC+GRUo2uLUkLvn13CsDvIKa5reekjs3+5ZGYeIg7k1HC0FbJyYzhvgdB04t89/1O/w1cDnyilFU=}'
    };
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    });
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}
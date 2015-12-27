var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

ap.listen(3000, function(){
    console.log('Server On!');
});

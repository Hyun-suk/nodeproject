var express = require('express');

var app = express();


/*
app.get('/', function (req, res) {
    res.send('Hello World!');
});
*/

app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.listen(8000, '0.0.0.0', function(){
    console.log('Server On!');
});

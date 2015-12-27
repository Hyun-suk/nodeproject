var express = require('express');
var path = require('path');
var app = express();


/*
app.get('/', function (req, res) {
    res.send('Hello World!');
});
*/
app.set("view engine", 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);

app.get('/', function (req, res) {
    res.render('my_ejs');
});

app.listen(8000, '0.0.0.0', function(){
    console.log('Server On!');
});

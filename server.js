var express = require('express')
var app = express()


app.use('/frontend',express.static(__dirname + '/frontend'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));


app.get('/', function (req, res) {
  res.sendFile( __dirname + '/frontend/index.html');
})

app.listen(process.env.PORT ||  3000, function () {
  console.log('Example app listening on port 3000!')
})
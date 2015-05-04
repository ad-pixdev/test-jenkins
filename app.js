// AC 04-05-2015

var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});

app.get('/mail', function (req, res) {
	res.send('test mail');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
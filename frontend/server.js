var express = require('express');
var app = express();

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.render('index.html');
});


app.get('/info.html', function (req, res) {
  res.render('info.html');
});

app.get('/rest', function (req, res) {
  res.json({ username: 'Flavio' });
});

app.get('/status', function (req, res) {
  res.json({ username: 'online' });
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});

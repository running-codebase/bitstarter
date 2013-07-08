var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

//var fileBuffer = fs.readFile("index.html");
//var stringResults = fileBuffer.toString('utf8',0,fileBuffer.length);


app.get('/', function(request, response) {
  response.send("this?");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

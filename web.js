var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var output = "Just Text";


app.get('/', function(request, response) {

    fs.readFile("index.html", function read(data,err) {

	if (err){output = "NOPE";response.send(output);}output = data.toString();response.send(output);});


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

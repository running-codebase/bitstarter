var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var output;

fs.readFile("./index.html", function read(data,err) {
    output = data.toString();

});

app.get('/', function(request, response) {
  response.send("JUST TEXT");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

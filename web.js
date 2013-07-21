var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var output;


app.get('/', function(request, response) {

    output = fs.readFileSync("Hello World 2!").toString();
    response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

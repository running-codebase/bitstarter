var express = require('express');

var app = express.createServer(express.logger());

var output;

fs.readFile("./index.html", function read(data,err) {
    output = data.toString(); 

});

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*
    TODO: Create a web server to serve content for the client.
*/
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));

app.listen(port, function () {
    console.log('Server running on http://localhost:' + port + '/');
});
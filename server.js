var express = require('express');
 
var server = express();
server.use(express.static(__dirname + '/webroot'));


var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
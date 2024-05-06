var http = require('http');
var util = require('./util.js');




http.createServer(async function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var response = await util();
    res.end(response);
}).listen(8080);